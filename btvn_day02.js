import express from "express";
import mongoose from "mongoose";
import User from "./models/user.js";

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("connect database successfully.");
  })
  .catch((error) => {
    console.log(`failed:${error}`);
  });

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    if (!user) {
      return res.status(400).json({
        message: "Failed!",
      });
    }
    return res.status(201).json({
      message: "create user successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
