



# Next.js App with Wallet Integration

This project is a Next.js template built with Tailwind CSS that integrates **AppKit** and **Wagmi** for wallet connectivity. It supports three connection methods:
- **WalletConnect (Polkadot)** – Connect using a Polkadot-compatible wallet via WalletConnect.
- **MetaMask (Ethereum)** – Connect using MetaMask to get an Ethereum address.
- **Reactive DOT (DOTConnect)** – Connect your Polkadot wallet using Reactive DOT via a lightweight WebSocket-based light client provider.

This template uses **pnpm** as the package manager.

## Features

- **Next.js** with Tailwind CSS for modern UI development.
- **Wallet Integration:**
  - **WalletConnect for Polkadot:** Scan a QR code to connect a Polkadot wallet.
  - **MetaMask for Ethereum:** Directly connect and retrieve your Ethereum address.
  - **Reactive DOT (DOTConnect):** Securely connect your Polkadot wallet through a lightweight, WebSocket-based light client provider.
- **AppKit + Wagmi:** Easily integrate blockchain connectivity.
- Lightweight and modular structure for further customization.


## Installation

1. **Clone the Repository:**

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. **Install Dependencies:**

   ```bash
   pnpm install
   ```


### WalletConnect (Polkadot)

- **How It Works:**
  When you click the **"Connect Wallet (Polkadot)"** button, the app initializes a WalletConnect provider using a projectId (obtained from [Reown Cloud](https://cloud.reown.com/)). A modal opens displaying a QR code.
- **Usage Note:**
  If you have the Talisman extension installed (a popular Polkadot wallet), it might automatically intercept the connection. To use WalletConnect without Talisman’s interference, temporarily disable the extension or use a different browser/profile.

### MetaMask (Ethereum)

- **How It Works:**
  Clicking the **"Connect Wallet (MetaMask)"** button triggers MetaMask’s `eth_requestAccounts` method. If MetaMask is installed, it will prompt you to connect and return your Ethereum address (which starts with `0x`).
- **Setup:**
  Make sure MetaMask is installed in your browser. You can download it from the [Chrome Web Store](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn).

### Reactive DOT (DOTConnect)

Reactive DOT uses DOTConnect to securely connect your Polkadot wallet via a lightweight WebSocket-based light client provider. This integration offers an alternative method to connect your wallet without the need for a full node.

- **What It Connects:**
  Enables connection to your Polkadot wallet for secure blockchain interactions through DOTConnect.

- **How It Works:**
  The integration leverages a light client approach that establishes a connection over WebSockets. The connection is initialized by importing your Reactive DOT configuration (in `reactiveDot.ts`) and rendered using the `ConnectionButton` component from `dot-connect/react.js`.

- **Bundle Size Impact:**
  Integrating DOTConnect results in an increase in bundle size. In our tests, the first load JavaScript size for the home page increased from approximately **269 kB** to **325 kB** (an increase of **56 kB**), and the shared JS bundle grew from about **95.6 kB** to **313 kB** (an increase of roughly **217 kB**). Overall, the bundle size increased by approximately **273 kB**.
