const path = require('path');

module.exports = {
  resolve: {
    // 対象にする拡張子の指定
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  entry: {
    // エントリーポイントの指定
    client: './src/client/index.jsx',
  },
  output: {
    // アウトプット先のディレクトリを指定(assets)
    path: path.resolve(__dirname, 'dist'),
    // アウトプットするファイルの名前を指定(名前は変更しない)
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        // 拡張子が.jsか.jsxだった場合に適用するルール
        test: /\.(js|jsx|ts|tsx)?$/,
        // node_modulesディレクトリ(Yarnでインストールしたパッケージが入ってる)は除外
        exclude: /node_modules/,
        use: [
          {
            // babelの設定
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: ['> 5% in JP']
                    }
                  },
                ],
                ["@babel/preset-typescript"]
              ],
            },
          },
        ],
      },
      {
        test: /\.tsx$/,
        loader: "ts-loader",
        include: __dirname
      }
    ],
  },

};
