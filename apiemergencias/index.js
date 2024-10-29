// Importar módulos necesarios
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Crear una aplicación Express
const app = express();
app.use(cors());

// Configuración de la conexión a MySQL en XAMPP
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // Usuario predeterminado de XAMPP
  password: '',           // Contraseña en blanco (ajusta si la cambiaste)
  database: 'bomberos', // Nombre de tu base de datos
  port: 3306              // Puerto de MySQL en XAMPP
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
  } else {
    console.log('Conectado a la base de datos MySQL');
  }
});

// Endpoint para obtener datos de emergencias
app.get('/emergencias', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  const query = `
    SELECT 
      p.id AS parte_id,
      p.nombre_denunciante,
      p.apellido_denunciante,
      p.documento_denunciante,
      p.direccion,
      p.tipo_asistencia,
      CONCAT(per.nombre, ' ', per.apellido) AS jefe_dotacion,
      p.parte_escrito
    FROM 
      partes p
    LEFT JOIN 
      personal per ON p.jefe_dotacion = per.legajo`; 
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener datos:', err);
      res.status(500).json({ error: 'Error en el servidor' });
    } else {
      res.json(results);
    }
  });
});

// Iniciar el servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor API ejecutándose en http://localhost:${PORT}`);
});
