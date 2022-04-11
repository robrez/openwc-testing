import { html, TemplateResult } from "lit";
import "../src/define.js";

export default {
  title: "XFoo",
  component: "x-foo",
};

interface Story {
  (): TemplateResult;
}

const generate: Story = () => html` <x-foo> </x-foo> `;

export const Basic = generate();
