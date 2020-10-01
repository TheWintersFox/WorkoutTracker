const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

//Port
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.use(logger("dev"));


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/WorkoutTracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

//routes 

app.use(require("./routes/api-Routes"));
app.use(require("./routes/html-Routes"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})