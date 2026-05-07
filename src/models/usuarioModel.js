const conexao = require("../database/config");

function cadastrar(nome, email, senha) {

    const instrucao = `
        INSERT INTO usuario (nome, email, senha)
        VALUES ('${nome}', '${email}', '${senha}');
    `;

    return conexao.promise().query(instrucao);  
}

module.exports = {
    cadastrar
};