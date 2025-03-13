Вот обновлённый файл README.md с добавленной информацией о влиянии SubConnect на общий размер бандла:

```markdown
# Next.js App with Wallet Integration

This project is a Next.js template built with Tailwind CSS that integrates **AppKit** and **Wagmi** for wallet connectivity. It supports four connection methods:
- **WalletConnect (Polkadot)** – Connect using a Polkadot-compatible wallet via WalletConnect.
- **MetaMask (Ethereum)** – Connect using MetaMask to get an Ethereum address.
- **Reactive DOT (DOTConnect)** – Securely connect your Polkadot wallet via a lightweight WebSocket-based light client provider.
- **SubConnect** – Efficiently connect Polkadot, Substrate, and Ethereum wallets using a dynamic and modular approach.

This template uses **pnpm** as the package manager.

## Features

- **Next.js** with Tailwind CSS for modern UI development.
- **Wallet Integration:**
  - **WalletConnect for Polkadot:** Scan a QR code to connect a Polkadot wallet.
  - **MetaMask for Ethereum:** Directly connect and retrieve your Ethereum address.
  - **Reactive DOT (DOTConnect):** Securely connect your Polkadot wallet through a lightweight, WebSocket-based light client provider.
  - **SubConnect:** Connect a wide range of wallets (Polkadot, Substrate, and Ethereum) with minimal dependencies via dynamic imports.
- **AppKit + Wagmi:** Easily integrate blockchain connectivity.
- Lightweight and modular structure for further customization.
- **Additional SubConnect Benefits:**
  - **Minimal Dependencies:** Only the required wallet modules are loaded.
  - **Multiple Wallets & Accounts:** Supports simultaneous connection of multiple wallets and accounts.
  - **Multi-Chain Support:** Easy switching between chains/networks.
  - **Account Center & Notifications:** Manage wallet connections and receive real-time transaction notifications.

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

   To use SubConnect, install the additional packages:

   ```bash
   pnpm add @subwallet-connect/core @subwallet-connect/injected-wallets @subwallet-connect/subwallet @subwallet-connect/subwallet-polkadot ethers
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

### SubConnect

SubConnect provides an efficient and easy solution for connecting Polkadot, Substrate, and Ethereum wallets. It extends integration capabilities by supporting multiple wallet types (e.g., SubWallet-Polkadot, WalletConnect-Polkadot, Talisman, Polkadot{.js}, Polkadot Vault, Ledger Polkadot) and leverages dynamic imports to load only the required modules.

- **What It Connects:**
  Enables connection to a wide range of wallets across the Polkadot, Substrate, and Ethereum ecosystems.

- **How It Works:**
  SubConnect dynamically imports wallet modules and their dependencies only when a user selects a wallet, ensuring minimal bandwidth usage. It provides two connection solutions for Substrate wallets—one for injected wallets and another for hardware or alternative wallet solutions.

- **Bundle Size Impact:**
  While dynamic imports help reduce unnecessary code, integrating SubConnect in our tests dramatically increased the first load JS size from around **269 kB** to nearly **4.88 MB** — an increase of approximately **4.61 MB**. This significant impact on the bundle size suggests that additional dependencies for SubConnect should be carefully reviewed and optimized for production.
