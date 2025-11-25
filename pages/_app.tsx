import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Client Site Tracker Test</title>
        <meta name="description" content="Client Site Tracker Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Matomo/Prospectory Tracking Code - Added in head section as per instructions */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d) {
                try {
                  if (w._psp) return;
                  var q = function() {
                    q.q.push(arguments)
                  };
                  q.q = [];w._psp = q;var s = d.createElement("script");s.async = 1;s.src = "https://app-dev.prospectory.ai/psp.tracker.dev.js";
                  var f = d.getElementsByTagName("script")[0];f.parentNode.insertBefore(s, f);
                  s.onload = function() {
                    try {
                      (w.tracking && w.tracking.load) && w.tracking.load({
                        pspClientId: "cmdymbp3q001cna243vesyx4r",
                        pspUserId: "cm6rgwls50000jb2lypjf341q"
                      })
                    } catch (e) {}
                  };
                } catch (e) {}
              })(window, document);
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

