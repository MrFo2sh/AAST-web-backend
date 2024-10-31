const express = require("express");
const app = express();

const mongoose = require("mongoose");

var users = [];

const posts = require("./posts.json");
const User = require("./models/user");

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

app.post("/register", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const createdUser = await User.create({ name, email, password });

  res.json(createdUser);
});

async function run() {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(
      "mongodb+srv://monymohhig:pgQ7comXw9SUGkfv@cluster0.dks0g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Connected to online MongoDB");

    app.listen(3000, () => {
      console.log("Server listening on port 3000");
    });
  } catch (error) {
    console.log("err", error);
  }
}
run();
