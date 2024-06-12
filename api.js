// api.js

const API_URL = 'http://localhost:3000/api';

// Función para obtener todos los productos
export async function getProducts() {
    try {
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) {
            throw new Error('Error al obtener productos');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Función para obtener todos los empleados
export async function getEmployees() {
    try {
        const response = await fetch(`${API_URL}/employees`);
        if (!response.ok) {
            throw new Error('Error al obtener empleados');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Función para agregar un nuevo producto
export async function addProduct(product) {
    try {
        const response = await fetch(`${API_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        if (!response.ok) {
            throw new Error('Error al agregar producto');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

// Función para agregar un nuevo empleado
export async function addEmployee(employee) {
    try {
        const response = await fetch(`${API_URL}/employees`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        });
        if (!response.ok) {
            throw new Error('Error al agregar empleado');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
