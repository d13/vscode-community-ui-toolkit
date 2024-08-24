import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

const COMPONENT_NAME = 'vscode-link';

@customElement(COMPONENT_NAME)
export class Link extends LitElement {
  static override styles = css`
    :host a {
      color: var(--vscode-textLink-foreground);
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      text-decoration: none;

      &:hover {
        color: var(--vscode-textLink-activeForeground);
        text-decoration: underline;
      }
    }
  `;

  @property({ type: String, reflect: true })
  href = '';

  @property({ type: String })
  hreftitle?: string;

  @property({ type: String })
  hreflang?: string;

  @property({ type: String, reflect: true })
  target?: '_self' | '_blank' | '_parent' | '_top';

  @property({ type: String, reflect: true })
  rel?: string;

  @property({ type: String, reflect: true })
  download?: string;

  @property({ type: String, reflect: true })
  ping?: string;

  @property({ type: String })
  referrerpolicy?: string;

  @property({ type: String, reflect: true })
  type?: string;

  override render() {
    return html`
      <a
        href="${this.href}"
        title="${ifDefined(this.hreftitle)}"
        hreflang="${ifDefined(this.hreflang)}"
        target="${ifDefined(this.target)}"
        rel="${ifDefined(this.rel)}"
        download="${ifDefined(this.download)}"
        ping="${ifDefined(this.ping)}"
        referrerpolicy="${ifDefined(this.referrerpolicy)}"
        type="${ifDefined(this.type)}"
      >
        <slot></slot>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [COMPONENT_NAME]: Link;
  }
}
