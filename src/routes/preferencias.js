const express = require("express");
const router = express.Router();
const conexao = require('../database/config');

// salvar questionário
router.post("/salvar", (req, res) => {

    const { genero, paginas, frequencia, fkUsuario } = req.body;

    const sql = `
        INSERT INTO Preferencias (genero, paginas, frequencia, fkUsuario)
        VALUES (?, ?, ?, ?)
    `;

    conexao.query(sql, [genero, paginas, frequencia, fkUsuario], (erro) => {

        if (erro) {
            console.log(erro);
            return res.status(500).send("Erro ao salvar");
        }

        res.send("Salvo com sucesso");

    });

});

// gráfico
router.get("/generos", (req, res) => {

    const sql = `
        SELECT genero, COUNT(*) AS quantidade
        FROM Preferencias
        GROUP BY genero
    `;

    conexao.query(sql, (erro, resultado) => {

        if (erro) {
            return res.status(500).send("Erro");
        }

        res.json(resultado);

    });

});

module.exports = router;