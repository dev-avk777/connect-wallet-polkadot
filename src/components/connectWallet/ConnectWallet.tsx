import { useState } from 'react'

// Extend the Window interface to include the ethereum property

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>
    }
  }
}
import { initWalletConnectProvider, connectWallet } from '@/lib/walletConnect'

export function ConnectWallet() {
  const [account, setAccount] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // Подключение через WalletConnect (Polkadot)
  const handleConnectPolkadot = async () => {
    try {
      setLoading(true)
      // Инициализируем провайдера и подключаем кошелёк
      const provider = await initWalletConnectProvider()
      const session = await connectWallet(provider)
      // Извлекаем аккаунты (CAIP формат, адрес после второго двоеточия)
      const accounts = session.namespaces.polkadot.accounts.map((acc: string) => acc.split(':')[2])
      setAccount(accounts[0] || null)
    } catch (err) {
      console.error('Ошибка подключения Polkadot кошелька:', err)
    } finally {
      setLoading(false)
    }
  }

  // Подключение через MetaMask (Ethereum)
  const handleConnectMetaMask = async () => {
    try {
      setLoading(true)
      if (typeof window !== 'undefined' && window.ethereum) {
        // Запрос аккаунтов у MetaMask
        const accounts = (await window.ethereum.request({
          method: 'eth_requestAccounts',
        })) as string[]
        setAccount(accounts[0] || null)
      } else {
        alert('MetaMask не найден. Пожалуйста, установите MetaMask.')
      }
    } catch (err) {
      console.error('Ошибка подключения MetaMask:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        onClick={handleConnectPolkadot}
        disabled={loading}
      >
        {loading ? 'Connecting...' : 'Connect Wallet (Polkadot)'}
      </button>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        onClick={handleConnectMetaMask}
        disabled={loading}
      >
        {loading ? 'Connecting...' : 'Connect Wallet (MetaMask)'}
      </button>
      {account && <p className="mt-2 text-lg text-green-300">Connected Account: {account}</p>}
    </div>
  )
}
