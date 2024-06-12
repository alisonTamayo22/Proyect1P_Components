class ProductTable extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    async fetchProducts() {
        const response = await fetch('/api/products');
        const products = await response.json();
        return products;
    }

    async render() {
        const products = await this.fetchProducts();
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                ${products.map(product => `
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        this.shadowRoot.innerHTML = `
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                }
                th {
                    background-color: #f2f2f2;
                }
            </style>
        `;
        this.shadowRoot.appendChild(table);
    }
}
customElements.define('product-table', ProductTable);
