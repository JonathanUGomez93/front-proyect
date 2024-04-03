const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Llamo los modelos
const Cards = db.Card;

const productsAPIController = {
    list: async (req, res) => {
    try {
          let cards = await Cards.findAll();
          res.send(cards);
        } catch (error) {
          console.error(error);
          res.status(500).send("Error interno del servidor.");
        }
      },
  detail: async (req, res) => {
    try {
        let cards = await db.Card.findByPk(req.params.id)
            
        res.render('productDetail', { cards: cards });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor.');
    }
},
};

module.exports = productsAPIController;
