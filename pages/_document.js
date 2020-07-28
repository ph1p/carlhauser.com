import Document, { Main, NextScript, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,500,600|Cookie&display=swap"
            rel="stylesheet"
          />
          <link href="/static/global.css" rel="stylesheet" />
          {this.props.styleTags}
          <link rel="icon" sizes="192x192" href="/static/icons/icon-192.png" />
          <link rel="apple-touch-icon" href="/static/icons/icon-512.png" />
          <link rel="icon" href="/static/icons/icon-192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
