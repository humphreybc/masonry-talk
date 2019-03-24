import { CheckerPlugin, TsConfigPathsPlugin } from "awesome-typescript-loader";
import * as path from "path";

const configFileName = "tsconfig.json";

export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: "awesome-typescript-loader",
      options: {
        configFileName: configFileName,
        module: "esnext",
        rootDir: path.resolve(__dirname, "..")
      }
    },
    {
      test: /\.(jpg|png|webp)$/,
      loader: "file-loader"
    }
  ]
};

export const resolve = {
  extensions: [".ts", ".tsx", ".js", ".jsx"],
  plugins: [new TsConfigPathsPlugin({ configFileName: configFileName })]
};

export const plugins = [new CheckerPlugin()];
