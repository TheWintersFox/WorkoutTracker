const path = require("path");
const workout = require("../models/workout")
const router = require ("express").Router();

router.get("/api/workouts", function (req, res) {
    workout.find().then(function (dbWorkout) { res.json(dbWorkout) }).catch(err => res.json(err))
});

router.get("/api/workouts/range", function (req, res) {
    workout.find({}).limit(7).then(function (dbWorkout) { res.json(dbWorkout) }).catch(err => res.json(err))
});

router.post("/api/workouts", function (req, res) {
    workout.create({}).then(function (dbWorkout) { res.json(dbWorkout) }).catch(err => res.json(err))
});

router.put("/api/workouts/:id", function (req, res) {
    workout.findByIdAndUpdate(req.params.id, {
        $push: { exercise: req.body }
       
    }
        ,
        { new: true, runValidators: true }
    ).then(function (dbWorkout) { res.json(dbWorkout) }).catch(err => res.json(err))
});

router.delete("/api/workouts", function (req, res) {
    workout.findByIdAndDelete(req.body.id).then(function () { res.json(true) }).catch(err => res.json(err))
});

module.exports = router