import React from 'react';
import getConfig from 'next/config';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import Head from '../components/head';
import initStore from '../store';
import { updateEntries } from '../store/actions/entries';

class CarlhauserApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { google } = require('googleapis');
    const { serverRuntimeConfig } = getConfig();

    if (
      serverRuntimeConfig.GAPI_CLIENT_EMAIL &&
      serverRuntimeConfig.GAPI_PRIVATE_KEY
    ) {
      const jwt = new google.auth.JWT(
        serverRuntimeConfig.GAPI_CLIENT_EMAIL,
        null,
        serverRuntimeConfig.GAPI_PRIVATE_KEY.replace(/\\n/g, '\n'),
        ['https://www.googleapis.com/auth/spreadsheets.readonly']
      );

      return new Promise((resolve, reject) => {
        jwt.authorize(async (err, response) => {
          const sheets = google.sheets('v4');

          const { data } = await sheets.spreadsheets.values.get({
            auth: jwt,
            range: 'To-do-Liste!A2:E100',
            spreadsheetId: process.env.SPREADSHEET_ID
          });

          if (data) {
            ctx.store.dispatch(updateEntries(data));
          }

          resolve({
            pageProps: {
              ...(Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {})
            }
          });
        });
      });
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Head />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore, {
  debug: typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
})(CarlhauserApp);
