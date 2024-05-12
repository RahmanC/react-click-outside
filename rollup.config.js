import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

const devMode = process.env.NODE_ENV === "development";

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/index.js",
    format: "es",
  },
  plugins: [
    typescript({
      compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
    }),
    terser({
      ecma: 2020,
      mangle: { toplevel: true },
      compress: {
        module: true,
        toplevel: true,
        unsafe_arrows: true,
        drop_console: !devMode,
        drop_debugger: !devMode,
      },
      output: { quote_style: 1 },
    }),
  ],
};
