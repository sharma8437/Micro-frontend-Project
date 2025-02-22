
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import path from "path";



const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

export default {
  entry: "./src/main.jsx", 
  mode: "development",
  devServer: {
    static: path.join(process.cwd(), "dist"),
    port: 5179, 
    hot: false, 
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".js", ".jsx"],
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
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        chat: "chat@http://localhost:5174/remoteEntry.js",
        email: "email@http://localhost:5175/remoteEntry.js",
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
