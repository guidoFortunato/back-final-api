const express = require("express");
require("dotenv").config();
const { dbConnection } = require('./database/config'); 

// Servidor de express
const app = express();

//Base de datos
// dbConnection()

//Directorio público
app.use( express.static("public") )

// Lectura y parseo del body
app.use( express.json() )

//Rutas
app.use( "/clients", require("./routes/clients") )



//Escuchar peticiones
app.listen(4000, () => {
  console.log(`Servidor corriendo en puerto 4000`);
});

