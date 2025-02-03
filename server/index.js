const express = require("express");
const app = express();
app.use(express.json);
const port = 9000;
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/glamorizeDb");

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    acceptTerms: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  User.create(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
