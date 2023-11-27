const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app,exphbs.engine('handlebars', exphbs.engine())
app.set('view engine', 'Handlebars')

app.use(express.static("public"))

app.get('/', (requisicao, resposta) => {
    resposta.render('home')
})

app.listen(3000, () => {
    console.log("servidar na 3000")
})