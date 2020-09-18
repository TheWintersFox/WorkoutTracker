//Dependencies
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutTracker = new Schema({
  
    Days: {
        type: Date,
        default: Date.now
    },
  
    exercises: [
    {
        type: {
            type: String,
            required: "Please enter a workout."
        },
        name: {
            type: String,
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

}
  
const Workout = mongoose.model("Workout", WorkoutTracker);

// Export the User model
module.exports = Workout;