class AppFooter extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                footer {
                    background: #333;
                    color: #fff;
                    padding: 1em;
                    text-align: center;
                    width: 100%;
                    box-sizing: border-box;
                    z-index: 1000;
                }
            </style>
            <footer>
                <p>© 2024 Universidad de las Fuerzas Armadas ESPE</p>
            </footer>
        `;
    }
}
customElements.define('app-footer', AppFooter);
