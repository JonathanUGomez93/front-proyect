const express = require("express");
const router = express.Router();
const productsAPIController = require("../../controllers/api/productsAPIController");
const cors = require("cors");

router.use(cors());
//Rutas
// router.get("/allCards", productsAPIController.list);
router.get("/test", productsAPIController.test)
router.get("/sealed", productsAPIController.sealed)

module.exports = router;  