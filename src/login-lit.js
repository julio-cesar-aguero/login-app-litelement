import { LitElement, html, css } from 'lit';

export class LoginLit extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            .container{
                border: 2px solid black;
                border-radius: 10px;
                width: 350px;
                height: 400px;
                text-align: center;
            }
            .container input{
                width: 90%;
                height: 40px;
                margin: 1.3em 1em;
                border: solid 1px #414141;
                border-top: 0px;
            }
            button{
                width: 60%;
                height: 40px;
                background: #11ce76;
                color: #414141;
                border: none;
                border-radius: 10px;
                margin-top: 8vh;
                cursor: pointer;
            }
            button:hover{
                background: #086238;
                color: white;
            }
        `
    ];

    render() {
        return html`
        <div class="container">
        <h2>Login Component</h2>
            <input id="email" type="email" placeholder='Email' required/>
            <input id="password" type="password" placeholder='Password' required/>
            <button @click="${this._login}">Sign in</button>
        </div>
        `;
    }
    _login(){
        const email = this.shadowRoot.querySelector('#email').value;
        const password = this.shadowRoot.querySelector('#password').value;
        console.log(email,password);
        if(!!email && !!password){
            this.dispatchEvent(new CustomEvent('sign',{
                detail: { login: true },
                bubbles: true, composed: true
            }))
        }
    }
}
customElements.define('login-lit', LoginLit);
