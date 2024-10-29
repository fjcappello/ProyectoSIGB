// Importar módulos necesarios
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Instancia de Express
const app = express();
app.use(cors());

// Configuración de la conexión a MySQL 
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',           
  password: '',           
  database: 'bomberos', 
  port: 3306              
});

// Conexion a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
  } else {
    console.log('Conectado a la base de datos MySQL');
  }
});

// Endpoint para obtener datos de emergencias
app.get('/partesemergencias', (req, res) => {
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

// Endpoint para obtener datos de personal
  app.get('/personal', (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    const query = `
      SELECT 
    p.legajo,
    CONCAT(p.nombre, ' ', p.apellido) AS nombre_completo,
    p.documento,
    DATE_FORMAT(p.nacimiento, '%d-%m-%Y') AS nacimiento,
    j.jerarquia AS jerarquia,  
    DATE_FORMAT(p.fecha_ingreso, '%d-%m-%Y') AS fecha_ingreso
  FROM 
      personal p
  JOIN  
    jerarquias j ON p.jerarquia_id = j.id;`;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener datos:', err);
      res.status(500).json({ error: 'Error en el servidor' });
    } else {
      res.json(results);
    }
  });
  });

// Inicio del servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor API ejecutándose en http://localhost:${PORT}`);
});
