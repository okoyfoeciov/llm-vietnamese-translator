const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js', 
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'src'),
  },
  mode: 'production',
};
