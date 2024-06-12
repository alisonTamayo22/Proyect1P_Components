class EmployeeForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    async addEmployee(event) {
        event.preventDefault();
        const name = this.shadowRoot.querySelector('#name').value;
        const position = this.shadowRoot.querySelector('#position').value;

        const response = await fetch('/api/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, position })
        });

        if (response.ok) {
            alert('Empleado agregado exitosamente');
        } else {
            alert('Error al agregar el empleado');
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
                <label for="position">Puesto:</label>
                <input type="text" id="position" name="position" required>
                <button type="submit">Agregar Empleado</button>
            </form>
        `;
        this.shadowRoot.querySelector('form').addEventListener('submit', this.addEmployee.bind(this));
    }
}
customElements.define('employee-form', EmployeeForm);
