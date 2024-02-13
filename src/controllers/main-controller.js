const controller = {
    index: (req, res) => {
        res.render("index")
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