import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Matomo/Prospectory Tracking Code
    const script = document.createElement('script')
    script.src = 'https://app-test.prospectory.ai/psp.tracker.test.js'
    script.setAttribute('pspClientId', 'cmea35np6000wof25h9t8cxom')
    script.setAttribute('pspUserId', 'cm67xbmvk00axahpvpjn4vumm')
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup if needed
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Domain Automation Dashboard</title>
        <meta name="description" content="Domain Automation Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

