module.exports = {
   
        entry: './src/index.js',
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js',
        },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
    
        },
      ],
    },
  };
  