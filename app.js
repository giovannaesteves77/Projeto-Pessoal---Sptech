require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

/* IMPORTAÇÃO DA ROTA */
const usuariosRouter = require("./src/routes/usuarios");

app.use(cors());
app.use(express.json());

/* USO DA ROTA */
app.use("/usuarios", usuariosRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Servidor rodando na porta ${PORT}`);
});
