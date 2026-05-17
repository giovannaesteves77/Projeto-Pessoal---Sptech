const database = require("../database/config");

function cadastrar(nome, email, senha) {
    const instrucao = `
        INSERT INTO Usuario (Nome, Email, Senha)
        VALUES ('${nome}', '${email}', '${senha}');
    `;

    return database.promise().query(instrucao);
}

function buscarTotalUsuarios() {
    const instrucaoSql = `
        SELECT COUNT(idUsuario) AS totalUsuarios
        FROM Usuario;
    `;

    return database.promise().query(instrucaoSql);
}

function buscarGeneros() {

    const sql = `
        SELECT genero, COUNT(*) AS quantidade
        FROM Preferencias
        GROUP BY genero;
    `;

    return database.promise().query(sql);
}
module.exports = {
    cadastrar,
    buscarTotalUsuarios,
    buscarGeneros
};


