import UniversalProvider from '@walletconnect/universal-provider'
import { WalletConnectModal } from '@walletconnect/modal'

const PROJECT_ID = '26af446a7215d912f661bf501be45aa0' // замените на ваш projectId

// Инициализация провайдера
export async function initWalletConnectProvider() {
  const provider = await UniversalProvider.init({
    projectId: PROJECT_ID,
    relayUrl: 'wss://relay.walletconnect.com',
  })
  return provider
}

// Функция для подключения кошелька
export async function connectWallet(provider: UniversalProvider) {
  // Определите требуемые namespace с поддержкой методов для Polkadot
  const params = {
    requiredNamespaces: {
      polkadot: {
        methods: ['polkadot_signTransaction', 'polkadot_signMessage'],
        chains: [
          'polkadot:91b171bb158e2d3848fa23a9f1c25182', // Polkadot
          // Добавьте другие цепочки, если нужно, например hydradx или turing network:
          // 'polkadot:afdc188f45c71dacbaa0b62e16a91f72', // HydraDX
          // 'polkadot:0f62b701fb12d02237a33b84818c11f6', // Turing Network
        ],
        events: ['chainChanged', 'accountsChanged'],
      },
    },
  }

  // Запускаем подключение через клиента WalletConnect
  const { uri, approval } = await provider.client.connect(params)

  // Создаём модальное окно для WalletConnect
  const walletConnectModal = new WalletConnectModal({
    projectId: PROJECT_ID,
  })

  // Если есть URI — открываем модальное окно, чтобы пользователь мог отсканировать QR-код
  if (uri) {
    walletConnectModal.openModal({ uri })
  }

  // Ожидаем одобрения сессии из кошелька
  const walletConnectSession = await approval()
  return walletConnectSession
}
