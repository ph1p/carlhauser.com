const withOffline = require('next-offline');
const webpack = require('webpack');

const nextConfig = {
  target: 'serverless',
  serverRuntimeConfig: {
    GAPI_CLIENT_EMAIL: process.env.GAPI_CLIENT_EMAIL,
    GAPI_PRIVATE_KEY: process.env.GAPI_PRIVATE_KEY
  },
  webpack: config => {
    config.node = {
      fs: 'empty',
      child_process: 'empty',
      encoding: 'empty',
      net: 'empty',
      tls: 'empty'
    };

    config.plugins.push(new webpack.IgnorePlugin(/^encoding$/, /node-fetch/));

    return config;
  },
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /[.](png|jpg|ico|css)/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'assets-cache',
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /^http.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'http-cache'
        }
      },
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
          }
        }
      },
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'google-fonts-stylesheets'
        }
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-webfonts',
          cacheableResponse: {
            statuses: [0, 200]
          },
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 365
          }
        }
      }
    ]
  }
};

module.exports = withOffline(nextConfig);
