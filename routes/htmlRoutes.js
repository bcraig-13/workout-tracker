const db = require("../models");

module.exports = function(app) {
    app.get("/", (req, res) => {
        if (req) {
            return res.redirect("index");
            //display last workout?
        }
    })

    app.get("/exercise", (req, res) => {
        if (req) {
            return res.redirect("exercise");
        }
    })

    app.get("/stats", (req, res) => {
        if (req) {
            //needs db.{dbname}.findAll() to display stats?
            return res.redirect("stats");
        }
        //Need something else for all three of the above app.gets
    })
}

// const router = require("express").Router();
// const path= require("path");
// router.get("/exercise", function (req, res) {
//    res.sendFile(path.join(__dirname, "../public/exercise.html"));   
// });
// router.get("/stats", function (req, res) {
//       res.sendFile(path.join(__dirname, "../public/stats.html"));   
//    });
// module.exports = router;