const usuarioModel = require("../models/usuarioModel");

function cadastrar(req, res) {

    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    usuarioModel.cadastrar(nome, email, senha)
        .then(function () {
            res.status(200).json({
                mensagem: "Usuário cadastrado com sucesso"
            });
        })
        .catch(function (erro) {
            res.status(500).json(erro);
        });
}

module.exports = { 
    cadastrar
};