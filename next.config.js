require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  target: 'serverless',
  webpack: config => {
    config.plugins = config.plugins || [];

    config.node = {
      fs: 'empty',
      child_process: 'empty',
      net: 'empty',
      tls: 'empty'
    };

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    return config;
  }
};
