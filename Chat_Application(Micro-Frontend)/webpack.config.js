// webpack.config.js
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import path from "path";

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

export default {
  entry: "./src/main.jsx", // entry file with correct extension
  mode: "development",
  devServer: {
    static: path.join(process.cwd(), "dist"),
    port: 5174,
    hot: false, // disable HMR for now
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "chat",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
        template: "./index.html",
    }),
  ],
};
