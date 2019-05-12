module.exports = {
  target: 'serverless',
  webpack: config => {
    config.node = {
      fs: 'empty',
      child_process: 'empty',
      net: 'empty',
      tls: 'empty'
    };

    return config;
  }
};
