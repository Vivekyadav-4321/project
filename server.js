const app = require("express")()
const PORT = process.env.PORT || 3000
const homepage = require("./views/homepage/server")
const login = require("./views/login/server")
const searchpage = require("./views/search/server")
app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({ extended: true }));

//setting route 
app.use("/",homepage)
app.use("/login",login)
app.use("/search",searchpage)

app.listen(PORT, ()=>{
    log(`Server is live ${PORT}`)
})