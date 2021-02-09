const db = require("../models");

module.exports = function (app) {
  app.get("api/workouts", (req, res) => {
    db.Workout.find({})
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  //I think this is right??
  app.post("/api/workouts", (req, res) => {
      res.json(response);
    })
};
