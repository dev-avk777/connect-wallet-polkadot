

---

```markdown
# Next.js App with Wallet Integration

This project is a Next.js template built with Tailwind CSS that integrates **AppKit** and **Wagmi** for wallet connectivity. It supports two connection methods:
- **WalletConnect (Polkadot)** – Connect using a Polkadot-compatible wallet via WalletConnect.
- **MetaMask (Ethereum)** – Connect using MetaMask to get an Ethereum address.

This template uses **pnpm** as the package manager.

## Features

- **Next.js** with Tailwind CSS for modern UI development.
- **Wallet Integration:**
  - **WalletConnect for Polkadot:** Scan a QR code to connect a Polkadot wallet.
  - **MetaMask for Ethereum:** Directly connect and retrieve your Ethereum address.
- **AppKit + Wagmi:** Easily integrate blockchain connectivity.
- Lightweight and modular structure for further customization.

## Requirements

- Node.js (v14 or higher)
- pnpm (preferred package manager)
- Google Chrome (recommended for MetaMask support)
- (Optional) Disable Talisman extension if it interferes with WalletConnect for Polkadot

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

3. **Configure Environment (if needed):**

   If your project requires any environment variables (e.g., API keys or custom configuration), create a `.env` file in the root directory. (The current template may not need extra configuration.)

## Development

To run the project in development mode:

```bash
pnpm dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Wallet Integration Details

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

## Project Structure

- **`pages/_app.tsx`**
  Contains global providers (Wagmi and AppKit) and configuration.

- **`pages/index.tsx`**
  The main landing page that renders the wallet connection component.

- **`components/ConnectWallet.tsx`**
  Implements the UI and logic for wallet connectivity, including both Polkadot (WalletConnect) and MetaMask (Ethereum).

- **`lib/walletConnect.ts`**
  Contains helper functions for initializing WalletConnect provider and connecting wallets.

- **`tailwind.config.ts` & `globals.css`**
  Tailwind and global styling configuration.

## Building and Deployment

To build the project for production:

```bash
pnpm build
```

Then start the production server:

```bash
pnpm start
```

Ensure any required environment variables are set in production.

## License

Specify your project's license here (e.g., MIT).

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements.

## Contact

For further questions or support, please contact [Your Name/Email] or visit the repository at `<repository_url>`.
```

---

This README provides a clear overview of the project, installation steps, wallet integration details, and project structure. Adjust any sections (like repository URL, contact info, and license) as needed for your project.