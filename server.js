require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

/* MIDDLEWARES */
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/* ROTAS */
const usuariosRouter = require("./src/routes/usuarios");
const preferenciasRouter = require("./src/routes/preferencias");


app.use("/usuarios", usuariosRouter);
app.use("/preferencias", preferenciasRouter);

/* PORTA */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});