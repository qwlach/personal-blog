const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Qwl个人博客',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ['hello'],
        notes: ['项目启动了呀']
      },
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: 'Webpack error',
          message: severity + ': ' + error.name,
          subtitle: error.file || ''
        });
      },
      // 每次编译时都清空控制台么？
      // 默认：true
      clearConsole: true,

      // 添加格式化方法和转换方法(如下)
      additionalFormatters: [],
      additionalTransformers: []
    })
  ],
  devServer: {
    historyApiFallback: true,
    open: false,
    hot: true,
    port: 8082
  }
};
