const mysql = require('mysql2');

const dbConnection = async() => {

  // Configura la conexión
  const connection = mysql.createConnection({
    host: 'localhost',      
    user: 'root',     
    password: 'root',
    database: 'test'
  });
  
  // Establece la conexión
  connection.connect((err) => {
    if (err) {
      console.error('Error conectando a la base de datos:', err);
      return;
    }
    console.log('Conectado a la base de datos MySQL');
  });

}

module.exports = {
  dbConnection
};
