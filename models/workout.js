//Dependencies
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schemaWorkout = new Schema({

    day: {
        type: Date,
        default: () => new Date()
    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter a workout."
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter the name of the exercise."
            },
            duration: {
                type: Number,
                required: "Please enter how long the workout lasted."
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
}, {
    toJSON: {
        virtuals: true
    }
});

// adds a dynamically-created property to schema
schemaWorkout.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
});

const workout = mongoose.model("Workout", schemaWorkout);

// Export the User model
module.exports = workout;