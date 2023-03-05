import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";

import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.set('strictQuery', false);
mongoose
  .connect(
    "mongodb://localhost:27017/Blog",{useNewUrlParser :true}
  )
  .then(() => app.listen(7000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 7000")
  )
  .catch((err) => console.log(err));
