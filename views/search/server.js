const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

router.get("/index.js", (req, res)=>{
    res.sendFile(`${__dirname}/index.js`)
})

router.get("/index.css", (req, res)=>{
    res.sendFile(`${__dirname}/index.css`)
})

module.exports = router

