import { ConnectWallet } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Polkadot WalletConnect Integration</h1>
      <ConnectWallet />
    </main>
  )
}
