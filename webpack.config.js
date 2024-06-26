const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssNano = require('cssnano');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');


const glob = require('glob-all');

module.exports = (env, argv) => ({
  entry: './src/index.tsx',
  devtool: argv.mode === 'development' ? 'inline-source-map' : false,
  mode: argv.mode === 'development' ? 'development' : 'production',
  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.tsx') || assetFilename.endsWith('.ts');
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                  argv.mode === 'production' ? CssNano() : false,
                ].filter(Boolean),
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".*", ".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "build"),
    publicPath: 'https://demo.imperfectandcompany.com/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      interpolate: true,
      templateParameters: {
        'PUBLIC_URL': 'https://demo.imperfectandcompany.com'
      }
    }),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify('https://demo.imperfectandcompany.com')
    }),
    new MiniCssExtractPlugin(),
argv.mode === 'productiodddn'
  ? new PurgeCSSPlugin({
      paths: glob.sync([
        `${path.join(__dirname, 'src')}/**/*`,
        './node_modules/tailwindcss/**/*.js',
      ],  { nodir: true }),
      extractors: [
        {
          extractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          extensions: ['html', 'jsx', 'js', 'ts', 'tsx'],
        },
      ],
    })
  : false,
  ].filter(Boolean),
});