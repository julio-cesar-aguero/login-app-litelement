import { LitElement, html, css } from "lit";
import "./login-lit";

class LoginApp extends LitElement {
  static properties = {
    success: { type: Boolean }
  };

  static styles = css`
    login-lit {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
  constructor() {
    super();
    this.success = false;
  }

  render() {
    return html` 
    ${
      this.success ? html`<h1>Welcome</h1>` : html`<login-lit @sign="${ this._hiddenLogin}"></login-lit>`
    }
    `;
  }
  _hiddenLogin(){
    this.success = true;
  }
}

customElements.define("login-app", LoginApp);
