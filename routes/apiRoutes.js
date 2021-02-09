const db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then((response) => {
      res.json(response);
    });
  });

  app.put("/api/workouts/:id", ({ params, body }, res) => {
    db.Workout.findOneAndUpdate(
      { _id: params.id },
      { $push: { exercises: body } },
      { upsert: true, useFindAndModify: false },
      (updatedWorkout) => {
        res.json(updatedWorkout);
      }
    );
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
