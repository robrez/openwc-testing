import { LitElement, html, css } from "lit";
import "@material/mwc-button/mwc-button";

export class ComponentA extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 1rem;
    }
  `;

  render() {
    return html`
      <h1>Test</h1>
      <main>
        <div>
          <mwc-button raised>Hello World</mwc-button>
        </div>
      </main>
    `;
  }
}
