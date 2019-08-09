import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import { updateEntries } from '../store/actions/entries';

class CarlhauserApp extends App {
  static async getInitialProps({ Component, ctx }) {
    try {
      const { google } = require('googleapis');

      if (process.env.GAPI_CLIENT_EMAIL && process.env.GAPI_PRIVATE_KEY) {
        const jwt = new google.auth.JWT(
          process.env.GAPI_CLIENT_EMAIL,
          null,
          process.env.GAPI_PRIVATE_KEY.replace(/\\n/g, '\n'),
          ['https://www.googleapis.com/auth/spreadsheets.readonly']
        );

        return new Promise(async (resolve, reject) => {
          jwt.authorize(async (err, response) => {
            if (err) return;
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
      } else {
        return {
          pageProps: {
            ...(Component.getInitialProps
              ? await Component.getInitialProps(ctx)
              : {})
          }
        };
      }
    } catch (e) {}
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Head>
          <title>{this.props.title || 'carlhauser - Secret Thoughts'}</title>
        </Head>
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
