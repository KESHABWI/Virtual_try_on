const express = require("express");
const app = express();
app.use(express.json)
const port = 9000;
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/glamorizeDb");

const { Schema }=mongoose;
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email format validation
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      match: /^\+\d{1,15}$/, // International phone number validation
      required: false,
    },
    bodyMeasurements: {
      height: {
        type: Number,
        required: true,
        min: 0,
      },
      weight: {
        type: Number,
        required: true,
        min: 0,
      },
      chest: {
        type: Number,
        required: false,
        min: 0,
      },
      waist: {
        type: Number,
        required: false,
        min: 0,
      },
      hips: {
        type: Number,
        required: false,
        min: 0,
      },
    },
  },
); 
const User= mongoose.model("User", userSchema);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
 User.create(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
