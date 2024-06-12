class ProductForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    async addProduct(event) {
        event.preventDefault();
        const name = this.shadowRoot.querySelector('#name').value;
        const price = this.shadowRoot.querySelector('#price').value;

        const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, price })
        });

        if (response.ok) {
            alert('Producto agregado exitosamente');
        } else {
            alert('Error al agregar el producto');
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                form {
                    display: flex;
                    flex-direction: column;
                    width: 300px;
                }
                label, input {
                    margin: 5px 0;
                }
                button {
                    margin-top: 10px;
                    padding: 10px;
                    background-color: #333;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #555;
                }
            </style>
            <form>
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" required>
                <label for="price">Precio:</label>
                <input type="number" id="price" name="price" required>
                <button type="submit">Agregar Producto</button>
            </form>
        `;
        this.shadowRoot.querySelector('form').addEventListener('submit', this.addProduct.bind(this));
    }
}
customElements.define('product-form', ProductForm);
