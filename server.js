const app = require("express")()
const PORT = process.env.PORT || 3000
const homepage = require("./views/homepage/server")
const login = require("./views/login/server")
const searchpage = require("./views/search/server")
const bodyParser = require('body-parser');
const apis = require("./views/api/server")
var cookieParser = require('cookie-parser')
app.use(cookieParser())

app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({ extended: true }));

//setting route 
app.use("/",homepage)
app.use("/login",login)
app.use("/search",searchpage)
app.use("/apis", apis)

app.listen(PORT, ()=>{
    console.log(`Server is live ${PORT}`)
})