const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")

router.get("/", (req, res) => {
    var userinfo = jwt.decode(req.cookies.usercookie)
   
    if(userinfo != null || undefined){
        res.render(`${__dirname}/index.hbs`, {
            username: userinfo.username
        })
    }

    else{
        res.redirect("/login")
    }

})

router.get("/index.js", (req, res) => {
    res.sendFile(`${__dirname}/index.js`)
})

router.get("/index.css", (req, res) => {
    res.sendFile(`${__dirname}/index.css`)
})

module.exports = router

