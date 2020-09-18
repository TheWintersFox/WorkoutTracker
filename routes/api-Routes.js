const path = require("path");
const workout = require("../models/workout")


app.get("/api/workouts", function (req, res) {
    workout.find().then(function (dbWorkout) { res.json(dbWorkout) }).catch(err => res.json(err))
});

app.get("/api/workouts/range", function (req, res) {
    workout.find({}).limit(7).then(function (dbWorkout) { res.json(dbWorkout) }).catch(err => res.json(err))
});

app.post("/api/workouts", function (req, res) {
    workout.create({}).then(function (dbWorkout) { res.json(dbWorkout) }).catch(err => res.json(err))
});

app.put("/api/workouts/:id", function (req, res) {
    workout.findByIdAndUpdate(req.params.id, {
        $push: { exercise: req.body }
       
    }
        ,
        { new: true, runValidators: true }
    ).then(function (dbWorkout) { res.json(dbWorkout) }).catch(err => res.json(err))
});

app.delete("/api/workouts", function (req, res) {
    workout.findByIdAndDelete(req.body.id).then(function () { res.json(true) }).catch(err => res.json(err))
});


