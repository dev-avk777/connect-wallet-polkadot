/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from '@reactive-dot/core'
import { InjectedWalletProvider } from '@reactive-dot/core/wallets.js'
import { LedgerWallet } from '@reactive-dot/wallet-ledger'
import { MimirWalletProvider } from '@reactive-dot/wallet-mimir'
import { WalletConnect } from '@reactive-dot/wallet-walletconnect'
import { registerDotConnect } from 'dot-connect'
import { PROJECT_ID } from './walletConnect'

export const config = defineConfig({
  // ...
  chains: {
    'polkadot:91b171bb158e2d3848fa23a9f1c25182': {
      //@ts-ignore
      rpcUrl: 'https://rpc.polkadot.io',
      // other chain-specific configurations
    },
    // add other chains if needed
  },
  wallets: [
    new InjectedWalletProvider(),
    new LedgerWallet(),
    new MimirWalletProvider(),
    new WalletConnect({
      projectId: PROJECT_ID,
      providerOptions: {
        metadata: {
          name: 'Connect wallet polkadot',
          description: 'A decentralized application powered by Reactive DOT',
          url: 'http://localhost:3000', //change this to your app url for production
          icons: ['APP_ICON'],
        },
      },
      chainIds: [
        // https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-13.md
        'polkadot:91b171bb158e2d3848fa23a9f1c25182', // Polkadot
        // ...
      ],
    }),
  ],
})

registerDotConnect({
  wallets: config.wallets ?? [],
})
