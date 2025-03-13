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
import { ConnectionButton } from 'dot-connect/react.js'

// Импортируем модули SubConnect
import Onboard from '@subwallet-connect/core'
import injectedModule from '@subwallet-connect/injected-wallets'
import subwalletModule from '@subwallet-connect/subwallet'
import subwalletPolkadotModule from '@subwallet-connect/subwallet-polkadot'
// При необходимости можно импортировать ethers или другие библиотеки

// Константы для инициализации SubConnect
const MAINNET_RPC_URL = 'https://mainnet.infura.io/v3/<INFURA_KEY>' // замените <INFURA_KEY>

const injected = injectedModule()
const subwalletWallet = subwalletModule()
const subwalletPolkadotWallet = subwalletPolkadotModule()

const onboard = Onboard({
  wallets: [injected, subwalletWallet, subwalletPolkadotWallet],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl: MAINNET_RPC_URL,
    },
  ],
  chainsPolkadot: [
    {
      id: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
      namespace: 'substrate',
      token: 'DOT',
      label: 'Polkadot',
      rpcUrl: 'polkadot.api.subscan.io',
      decimal: 10,
    },
  ],
})

export function ConnectWallet() {
  const [account, setAccount] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // Подключение через WalletConnect (Polkadot)
  const handleConnectPolkadot = async () => {
    try {
      setLoading(true)
      const provider = await initWalletConnectProvider()
      const session = await connectWallet(provider)
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

  // Подключение через SubConnect
  const handleConnectSubWallet = async () => {
    try {
      setLoading(true)
      const wallets = await onboard.connectWallet()
      const wallet = wallets[0]
      if (wallet) {
        // Определяем тип кошелька и извлекаем адрес
        if (wallet.type === 'evm') {
          // Для Ethereum-кошельков
          const accounts = (await wallet.provider.request({ method: 'eth_accounts' })) as string[]
          setAccount(accounts[0] || null)
        } else if (wallet.type === 'substrate') {
          // Для Substrate-кошельков
          const address = wallet.accounts && wallet.accounts[0]?.address
          setAccount(address || null)
        }
      }
    } catch (err) {
      console.error('Ошибка подключения через SubConnect:', err)
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
      <div>
        <h2 className="text-xl font-bold">Reactive DOT</h2>
        <ConnectionButton />
      </div>
      <button
        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded"
        onClick={handleConnectSubWallet}
        disabled={loading}
      >
        {loading ? 'Connecting...' : 'Connect Wallet (SubConnect)'}
      </button>
      {account && <p className="mt-2 text-lg text-green-300">Connected Account: {account}</p>}
    </div>
  )
}
