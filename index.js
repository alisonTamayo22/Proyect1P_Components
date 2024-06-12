import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public')); // Sirve archivos estáticos desde la carpeta 'public'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyecto_final'
});

db.connect(error => {
    if (error) {
        console.error("Error con la conexión a la base de datos:", error);
        return;
    }
    console.log("Conexión a la base de datos exitosa");
});

app.get("/api/products", (req, res) => {
    const query = "SELECT * FROM products";
    db.query(query, (error, results) => {
        if (error) {
            res.status(500).send('Error al recibir datos');
            return;
        }
        res.status(200).json(results);
    });
});

app.get("/api/employees", (req, res) => {
    const query = "SELECT * FROM employees";
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send('Error al recibir datos');
            return;
        }
        res.status(200).json(results);
    });
});

app.post("/api/products", (req, res) => {
    const { name, price } = req.body;
    const query = "INSERT INTO products (name, price) VALUES (?, ?)";
    db.query(query, [name, price], (error, results) => {
        if (error) {
            res.status(500).send('Error al recibir datos');
            return;
        }
        res.status(200).send(`Producto registrado ${results.insertId}`);
    });
});

app.post("/api/employees", (req, res) => {
    const { name, position } = req.body;
    const query = "INSERT INTO employees (name, position) VALUES (?, ?)";
    db.query(query, [name, position], (error, results) => {
        if (error) {
            res.status(500).send('Error al recibir datos');
            return;
        }
        res.status(200).send(`Empleado registrado ${results.insertId}`);
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});


