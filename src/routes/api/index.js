const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors());
//Homepage
router.get("/", function (req, res, next) {
  res.render("index");
});

const productAPIRouter = require("./products");

router.use(productAPIRouter);

module.exports = router;