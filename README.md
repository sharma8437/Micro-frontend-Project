# Container Micro-Frontend

This is a **Micro-Frontend** container application using **Webpack Module Federation**. It hosts multiple micro-frontends and serves as the main shell for them.

## 📌 Tech Stack

- **React 19**
- **Webpack 5** (Module Federation)
- **React Router DOM 7**
- **Babel** (for JSX compilation)
- **Custom CSS** (No Tailwind used)

## 🚀 Setup & Installation

1. **Clone the repository:**
   
sh
   git clone <repository-url>
   cd container

2. **Install dependencies:**
   
sh
   npm install

3. **Run the development server:**
   
sh
   npm run dev

4. **Build for production:**
   
sh
   npm run build





## 🛠️ Webpack Configuration (Module Federation)
This project uses Webpack **Module Federation** to integrate remote micro-frontends.

js
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
    port: 5175,
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
      name: "email",
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



## 📦 Package.json
json
{
  "name": "container",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "start": "webpack serve",
    "dev": "webpack serve",
    "build": "webpack --mode production"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@babel/preset-react": "^7.18.6",
    "autoprefixer": "^10.4.20",
    "babel-loader": "^8.3.0",
    "css-loader": "^6.7.1",
    "html-webpack-plugin": "^5.5.0",
    "postcss": "^8.5.3",
    "postcss-loader": "^8.1.1",
    "style-loader": "^3.3.1",
    "webpack": "^5.98.0",
    "webpack-cli": "^6.0.1",
    "webpack-dev-server": "^5.2.0"
  }
}


## 🌍 Module Federation in Webpack
Module Federation allows this container app to dynamically load micro-frontends at runtime. The remotes are defined in **webpack.config.js** under remotes.

- email -> http://localhost:5174/remoteEntry.js
- chat -> http://localhost:5175/remoteEntry.js

Each micro-frontend should expose its own remoteEntry.js file for integration.

---

### 🎯 Key Takeaways
✅ Uses Webpack 5 Module Federation to integrate micro-frontends
✅ React 19 with custom CSS (No Tailwind)
✅ Supports React Router DOM for navigation
✅ Babel for JSX transformation
✅ Works in development and production

