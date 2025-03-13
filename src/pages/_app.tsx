import '@/styles/globals.css'
import 'dot-connect/font.css'
import type { AppProps } from 'next/app'
import '@/lib/reactiveDot.ts'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
