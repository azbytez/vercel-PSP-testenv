import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Domain Automation Dashboard</title>
        <meta name="description" content="Domain Automation Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Matomo/Prospectory Tracking Code - Added in head section as per instructions */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d) {
                try {
                  if (w._psp) return;
                  var q = function() {
                    q.q = q.q || [];
                    q.q.push(arguments);
                  };
                  q.q = [];
                  w._psp = q;
                  var s = d.createElement("script");
                  s.async = 1;
                  s.src = "https://app-dev.prospectory.ai/psp.tracker.dev.js";
                  var f = d.getElementsByTagName("script")[0];
                  f.parentNode.insertBefore(s, f);
                  s.onload = function() {
                    try {
                      (w.tracking && w.tracking.load) && w.tracking.load({
                        pspClientId: "cmdymbogv000sna24m9ucukp4",
                        pspuserId: "cm470av0g0000cyvsydoy9jrd"
                      });
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

