import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 4000;

const app = express();

app.use(cors);
await mongoose.connect(
  "mongodb+srv://user:0000@cluster0.vubpbpg.mongodb.net/?retryWrites=true&w=majority"
);
console.log("mongodb is successfully connected");

app.get("/", (req, res) => {
  res.send("hello world");
});
-app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});
