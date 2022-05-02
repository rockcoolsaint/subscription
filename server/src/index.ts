import express from "express";
import authRoutes from "./routes/auth";
import subsRoutes from "./routes/subs";
import articlesRoutes from "./routes/articles";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// const app = express();
// const PORT = 8080;

// dotenv.config();

// app.use(express.json());
// // app.get("/", (req, res) => res.send("hello subscription"));
// app.use("/auth", authRoutes);

dotenv.config();

mongoose.connect(
  process.env.MONGO_URI as string
)
  .then(() => {
    console.log("connected to mongodb");

    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use("/auth", authRoutes);
    app.use("/subs", subsRoutes);
    app.use("/articles", articlesRoutes);

    app.listen(8080, () => {
      console.log(`Now listening on port 8080`);
    })
  })
  .catch((error) => {
    throw new Error(error);
})

// app.listen(8080, () => {
//   console.log(`Now listening on port 8080`);
// })