const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors());
//Homepage
router.get("/", function (req, res, next) {
  res.render("index", { title: "mtgsinglesdfe" });
});

const cardAPIRouter = require("./products");

router.use(cardAPIRouter);

module.exports = router;
