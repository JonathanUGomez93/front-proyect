//Requires
const express = require("express")
const router = express.Router()

//Controladores
const mainController = require("../controllers/main-controller")

//Rutas
router.get("/", mainController.index)
router.get("/new", mainController.new)
router.get("/featured", mainController.featured)
router.get("/sale", mainController.sale)
router.get("/contactUs", mainController.contact)
router.get("/sealed", mainController.sealed)
router.get("/productdetail/:id", mainController.detail)


module.exports = router;