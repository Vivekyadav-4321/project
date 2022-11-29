const express = require("express")
const router = express.Router()
const dotenv = require('dotenv');
dotenv.config(true);
const jwt = require("jsonwebtoken")

router.get("/", (req, res)=>{
    res.render(`${__dirname}/index.hbs`, {
        loginerrordisplay: "none"
    })
})

router.post("/",(req, res)=>{
    
    if((req.body.username == process.env.username1 || process.env.username1 || process.env.username2) && (req.body.password == process.env.password1 || process.env.password2 || process.env.password3)){
       var jwttoken = jwt.sign({username: req.body.username},"123344556677",{expiresIn: 1000*60*60})
        res.cookie("usercookie",jwttoken,{maxAge: 1000* 60* 60})
        res.redirect("/search")
    }

    else{
        res.render(`${__dirname}/index.hbs`, {
            loginerrordisplay: "block"
        })    }

})


router.get("/index.css", (req, res)=>{
    res.sendFile(`${__dirname}/index.css`)
})

module.exports = router

