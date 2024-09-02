import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <title>Home - Bakery</title>

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/images/apple-touch-icon-114x114-precomposed.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/images/apple-touch-icon-72x72-precomposed.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="/images/apple-touch-icon-57x57-precomposed.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="/js/jquery.min.js" />
        <Script src="/libraries/lib.js" />
        <Script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY" />
        <Script src="/js/functions.js" />
      </body>
    </Html>
  );
}
