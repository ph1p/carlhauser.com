import Document, { Main, NextScript, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { string } from 'prop-types';

const defaultDescription =
  'This page shows thoughts and ideas I had during waiting, taking the tram and while I was working on stuff. When an idea is visualized, I will mark it as done and place a link to the specific instagram page.';
const defaultOGURL = '';
const defaultOGImage = '';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="theme-color" content="#f3f3f3" />
          <meta
            name="description"
            content={this.props.description || defaultDescription}
          />
          <link rel="manifest" href="/static/manifest.json" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap"
            rel="stylesheet"
          />
          <link href="/static/global.css" rel="stylesheet" />
          {this.props.styleTags}
          <link rel="icon" sizes="192x192" href="/static/icons/icon-192.png" />
          <link rel="apple-touch-icon" href="/static/icons/icon-512.png" />
          <link rel="icon" href="/static/icons/icon-192.png" />
          <meta property="og:url" content={this.props.url || defaultOGURL} />
          <meta name="p:domain_verify" content="6733d801d63fac551d9547af5415726f"/>
          <meta property="og:title" content={this.props.title || ''} />
          <meta
            property="og:description"
            content={this.props.description || defaultDescription}
          />
          <meta name="twitter:site" content={this.props.url || defaultOGURL} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content={this.props.ogImage || defaultOGImage}
          />

          <meta
            property="og:image"
            content={this.props.ogImage || defaultOGImage}
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
