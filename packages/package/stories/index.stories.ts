import { html, TemplateResult } from "lit";
import "../src/component-a.js";

export default {
  title: "ComponentA",
  component: "component-a",
};

interface Story {
  (): TemplateResult;
}

const generate: Story = () => html` <component-a> </component-a> `;

export const Basic = generate();
