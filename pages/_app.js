import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import { wrapper } from '../store';
import { updateEntries } from '../store/actions/entries';

const defaultDescription =
  'This page shows thoughts and ideas I had during waiting, taking the tram and while I was working on stuff. When an idea is visualized, I will mark it as done and place a link to the specific instagram page.';
const defaultOGURL = '';
const defaultOGImage = '';

class CarlhauserApp extends App {
  static async getInitialProps({ Component, ctx }) {
    try {
      const { google } = require('googleapis');

      const jwt = new google.auth.JWT(
        process.env.GAPI_CLIENT_EMAIL,
        null,
        process.env.GAPI_PRIVATE_KEY.replace(/\\n/g, '\n'),
        ['https://www.googleapis.com/auth/spreadsheets.readonly']
      );

      return new Promise(async (resolve, reject) => {
        jwt.authorize(async (err, response) => {
          if (err) {
            return;
          }

          const sheets = google.sheets('v4');

          const { data } = await sheets.spreadsheets.values.get({
            auth: jwt,
            range: 'To-do-Liste!A2:E100',
            spreadsheetId: process.env.SPREADSHEET_ID,
          });

          if (data) {
            ctx.store.dispatch(updateEntries(data));
          }

          resolve({
            pageProps: {
              ...(Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {}),
            },
          });
        });
      });
    } catch {}
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>{this.props.title || 'carlhauser - Secret Thoughts'}</title>
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
          <meta property="og:url" content={this.props.url || defaultOGURL} />
          <meta
            name="p:domain_verify"
            content="6733d801d63fac551d9547af5415726f"
          />
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

        <Component {...pageProps} />
      </>
    );
  }
}

export default wrapper.withRedux(CarlhauserApp);
