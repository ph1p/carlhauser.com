const withOffline = require('next-offline');
const webpack = require('webpack');

const nextConfig = {
  target: 'serverless',
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
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
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
