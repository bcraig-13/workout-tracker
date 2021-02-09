const db = require("../models");

module.exports = function(app) {
    app.get("/", (req, res) => {
        if (req) {
            return res.redirect("index");
        }
        //else? display error message?
    })

    app.get("/exercise", (req, res) => {
        if (req) {
            return res.redirect("exercise");
        }

    })

    app.get("/stats", (req, res) => {
        if (req) {
            return res.redirect("stats");
        }
        //Need something else for all three of the above app.gets
    })
}