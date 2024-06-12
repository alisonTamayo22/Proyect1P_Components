class EmployeeTable extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    async fetchEmployees() {
        const response = await fetch('/api/employees');
        const employees = await response.json();
        return employees;
    }

    async render() {
        const employees = await this.fetchEmployees();
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Puesto</th>
                </tr>
            </thead>
            <tbody>
                ${employees.map(employee => `
                    <tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.position}</td>
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
customElements.define('employee-table', EmployeeTable);
