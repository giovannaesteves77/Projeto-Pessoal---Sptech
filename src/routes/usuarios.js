const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});  


router.get("/totalUsuarios", function (req, res) {
    usuarioController.buscarTotalUsuarios(req, res);
});
router.get("/generos", function (req, res) {
    usuarioController.buscarGeneros(req, res);
});


module.exports = router;
