//servidor y escucha
const express = require("express");
const PORT = 4000;
const app = express();

//configuraciones para recibir objetos json.
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

//generamos rutas
const routerPersonas = express.Router();

app.use('/dani/:apellido', (req, res) => {
    const {apellido} = req.params;
    res.send(`estoy en parámetros de DANI ${apellido}`)
})

app.use('/dani', (request, response) => {
    response.send("este es el GET de DANI en personas ")
})

//hacemos que nuestro servidor escuche
app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}`));
