const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const uri = "mongodb+srv://Kelum:kelumsenaka@cluster0.0yzbczb.mongodb.net/?retryWrites=true&w=majority"

const app = express();

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.use(express.json())

const Router = require('./routes/route')
app.use('/route',Router)

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server started on:" , process.env.PORT);
});