const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Llamo los modelos
const Cards = db.Card;
const Sealed = db.Sealed;

const productsAPIController = {
  list: async (req, res) => {
    try {
      let cards = await Cards.findAll({
      });
      res.send(cards);
    } catch (error) {
      console.error(error);
      res.status(500).send("cagada de API");
    }
  },
  test: async (req, res) => {
    try {
      let cards = await Cards.findAll();
      res.send(cards)
    } catch (err) {
      console.log(err)
      res.status(500).send('tu api no anda')
    }
  }
};

module.exports = productsAPIController;