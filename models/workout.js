//Dependencies
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schemaWorkout = new Schema({

    Days: {
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
            duraction: {
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

const workout = mongoose.model("Workout", schemaWorkout);

// Export the User model
module.exports = workout;