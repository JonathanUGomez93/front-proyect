const express = require("express");
const router = express.Router();
const cardsAPIController = require("../../controllers/api/cardsAPIController");
const cors = require("cors");

router.use(cors());
//Rutas
//Listado de Productos
// router.get("/productList", cardsAPIController.list);
//Detalle de Productos
router.get("/productDetail/:id", cardsAPIController.detail);


module.exports = router;
