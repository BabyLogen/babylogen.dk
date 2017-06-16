const path = require('path');

module.exports = function nuxtAnalytics(options) {
  // Don't include on dev mode
  if (this.options.dev && process.env.NODE_ENV !== 'production') {
    return;
  }

  if (!options.hjid) {
    console.error('Hotjar module needs a hjid value in the options');
    return;
  }

  if (!options.hjsv) {
    console.error('Hotjar module needs a hjsv value in the options');
    return;
  }

  // Add google analytics script to head
  this.options.head.script.push({
    src: `//static.hotjar.com/c/hotjar-${options.hjid}.js?sv=${options.hjsv}`,
    async: true,
  });

  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    ssr: false,
    options,
  });
};
