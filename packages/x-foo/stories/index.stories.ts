import { render, html, TemplateResult } from "lit";
import "../src/define.js";

export default {
  title: "XFoo",
  component: "x-foo",
};

export const Basic = () => {
  const result: TemplateResult = html`<x-foo></x-foo>`;
  const d = document.createElement("div");
  render(result, d);
  return d;
};
