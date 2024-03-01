const db = require('../database/models/index');

const controller = {
    index: async (req, res) => {
        try {
            let cards = await db.Card.findAll();
            res.render("index", { cards: cards });
        } catch (err) {
            console.log(err);
            res.status(500).send('La cagaste weon')
        }
    },
    new: async (req, res) => {
        try {
            let cards = await db.Card.findAll();
            res.render("new", { cards: cards });
        } catch (err) {
            console.log(err);
            res.status(500).send('La cagaste weon')
        }
    },
    featured: async (req, res) => {
        try {
            let cards = await db.Card.findAll();
            res.render("featured", { cards: cards });
        } catch (err) {
            console.log(err);
            res.status(500).send('La cagaste weon')
        }
    },
    sale: async (req, res) => {
        try {
            let cards = await db.Card.findAll();
            res.render("sale", { cards: cards });
        } catch (err) {
            console.log(err);
            res.status(500).send('La cagaste weon')
        }
    },
    contact: (req, res) => {
        res.render("contact")
    },
    sealed: (req, res) => {
        res.render("sealed")
    }
};
module.exports = controller