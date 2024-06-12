class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                header {
                    background-color: #333;
                    color: white;
                    padding: 1rem;
                    text-align: center;
                }
                nav {
                    margin-top: 1rem;
                }
                nav a {
                    color: white;
                    margin: 0 1rem;
                    text-decoration: none;
                }
                nav a:hover {
                    text-decoration: underline;
                }
            </style>
            <header>
                <h1>Proyecto Final – Parcial 1</h1>
                <nav>
                    <a href="index.html">Inicio</a>
                    <a href="productos.html">Productos</a>
                    <a href="empleados.html">Empleados</a>
                </nav>
            </header>
        `;
    }
}

customElements.define('app-header', AppHeader);
