import Document, { Html, Head, Main, NextScript } from "next/document"

// NEEDS /theme-test-1 for github deployment without domain name

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="icon" href="/favicon.png" /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:ital,wght@0,300;0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/static/favicon.png" />

          <meta charset="UTF-8" />
          <meta name="keywords" content="titla, meta, nextjs" />
          <meta name="author" content="Karlo Dobrovic" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
