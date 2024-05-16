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
router.get("/cart", mainController.cart)
router.get("/allCards", mainController.allCards)
router.get("/sealed", mainController.sealed)
router.get("/sealed/commander", mainController.commander)
router.get("/sealed/modern", mainController.modern)
router.get("/test", mainController.test)

const apiRouter = require('./api/index')
router.use("/api", apiRouter)

module.exports = router;