const path = require("path");

module.exports = [
  {
    entry: "./pagelink.js",
    output: {
      path: path.resolve(__dirname, "public"),
      // __dirname = webpack.config.js 파일이 위치한 경로
      // public : output을 가져다 놓을 경로
      // library :
      filename: "question_bundle.js",
      library: "common",
      library: {
        name: "common",
        type: "umd",
      },
    },
    mode: "development",
    module: {
      rules: [
        {
          // css 로드
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(png|jpg)$/i,
          type: "asset/resource",
          use: [
            {
              loader: "url-loader",
              options: {
                name: "[name].[ext]?[hash]",
                publicPath: "./asset/img",
                limit: 4000,
              },
            },
          ],
        },
      ],
    },
  },
];
