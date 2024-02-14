const db = require('../database/models/index');

const controller = {
    index: async (req, res) => {
        try {
            const cards = await db.Card.findAll();
            res.render("index", { cards: cards });
        } catch (err) { 
            console.log(err);
            res.status(500).send('La cagaste weon')
        }
    },
    new: (req, res) => {
        res.render("new")
    },
    featured: (req, res) => {
        res.render("featured")
    },
    sale: (req, res) => {
        res.render("sale")
    },
    contact: (req, res) => {
        res.render("contact")
    },
    sealed: (req, res) => {
        res.render("sealed")
    }
}
module.exports = controller