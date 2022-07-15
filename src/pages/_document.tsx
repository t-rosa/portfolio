import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className='overflow-x-hidden scroll-smooth bg-[url("/pattern.webp")] text-white antialiased'
      lang="fr"
    >
      <Head>
        <meta name="description" content="Portfolio de Toma Rosa" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
