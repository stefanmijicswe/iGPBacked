import express from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import { connectDB } from "./db/mongo";
import router from "./router";
import { cyan, green, magenta } from "kleur";

const dotenv = require("dotenv").config();

async function connectToDatabase() {
  try {
    const db = await connectDB();
  } catch (error) {
    console.error(magenta("Error connecting to MongoDB:"), error);
  }
}

connectToDatabase();

const app = express();
app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(express.json());

app.use("/", router());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(green(`Server is running on port ${cyan("8080")}`));
});
