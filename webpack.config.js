const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'development', // Change to 'production' when ready for production builds
  // Entry point is now pointing to a TypeScript file
  entry: './src/index.ts', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      // TypeScript loader
      {
        test: /\.tsx?$/,
        
        use: ['ts-loader',
        'babel-loader'
      ],
      exclude: /node_modules/,
    },
      // CSS loader
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // Uncomment below for bundle analysis
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  devtool: 'inline-source-map', // Source maps support
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
