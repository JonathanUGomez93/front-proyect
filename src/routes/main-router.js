//Requires
const express = require("express")
const router = express.Router()
const mainController = require("../controllers/main-controller")

//Rutas
router.get("/", mainController.index)


module.exports = router