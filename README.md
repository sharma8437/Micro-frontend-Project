#  Micro-Frontend Project

This is a **Micro-Frontend**  application project using **Webpack Module Federation**. It hosts multiple micro-frontends and serves as the main shell for them.

## 🌎 deployment  link
- Link :  https://micro-frontend-host-app.netlify.app/

## 📌 Tech Stack

- **React 19**
- **Webpack 5** (Module Federation)
- **React Router DOM 7**
- **Babel** (for JSX compilation)
- **Custom CSS** (No Tailwind used)

- ## webpages
- <img width="1439" alt="Screenshot 2025-02-23 at 2 37 04 AM" src="https://github.com/user-attachments/assets/09acfadd-8e4e-4662-850e-8674682466ff" />
- <img width="1439" alt="Screenshot 2025-02-23 at 2 37 28 AM" src="https://github.com/user-attachments/assets/21506426-3a18-436c-b636-9d209ccfa712" />


## 🚀 Setup & Installation

1. **Clone the repository:**
   

   git clone https://github.com/sharma8437/Micro-frontend-Project.git
  

2. **Install dependencies:**
   

   npm install

3. **Run the development server:**
   

   npm run dev

4. **Build for production:**
   

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

<img width="1028" alt="Screenshot 2025-02-23 at 2 35 52 AM" src="https://github.com/user-attachments/assets/0f851b45-c8ae-4ead-a6d9-cc736b37784e" />


## 🌍 Module Federation in Webpack
Module Federation allows this container app to dynamically load micro-frontends at runtime. The remotes are defined in **webpack.config.js** under remotes.

- email -> https://micro-frontend-email.netlify.app/
- chat -> https://micro-frontend-chat.netlify.app/

Each micro-frontend should expose its own remoteEntry.js file for integration.

---

### 🎯 Key Takeaways
 - ✅ Uses Webpack 5 Module Federation to integrate micro-frontends
- ✅ React 19 with custom CSS (No Tailwind)
- ✅ Supports React Router DOM for navigation
- ✅ Babel for JSX transformation
- ✅ Works in development and production

