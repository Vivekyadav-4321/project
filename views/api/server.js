const express = require("express")
const router = express.Router()
const fetch = require("node-fetch")
const dotenv = require('dotenv');
dotenv.config(true);
const jwt = require("jsonwebtoken")
router.get("/", (req, res) => {

    if (req.cookies != null || undefined) {

        var showname = req.query.showname
        fetch(`https://api.tvmaze.com/search/shows?q=${showname}`).then((data) => { return data.json() }).then((data) => {


            res.json({
                showposter: data[0].show.image.original,
                showname: data[0].show.name,
                showsummarry: data[0].show.summary,
                showtype: data[0].show.type,
                showlanguage: data[0].show.genres,
                status: data[0].show.status,
                genres: data[0].show.genres,
                schedule: data[0].show.schedule.days
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    else{
        res.sendStatus(200)
    }

})


module.exports = router

