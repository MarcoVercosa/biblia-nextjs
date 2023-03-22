import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="language" content="pt-BR" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />

      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
