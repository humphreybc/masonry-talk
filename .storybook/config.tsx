import { configure } from "@storybook/react";
import { cssRule } from "typestyle";

cssRule("*", {
  boxSizing: "border-box",
});

cssRule("body", {
  background: "#fff",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  height: "100vh",
  margin: 0,
  padding: 48,
});

const req = require.context("../src", true, /.*\.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
