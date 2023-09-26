//Requires
const express = require("express")
const path = require("path")
const mainRouter = require("./routes/main-router")

const app = express()

//Middlewares
app.use(express.static(path.join(__dirname, "../public")))

//Template Engines
app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"/views"))

//Ruteo
app.use("/", mainRouter);

const PORT = 3030
app.listen(PORT, () => {
    console.log(`ejecutando puerto ${PORT}`)
})