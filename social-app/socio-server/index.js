import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import { CONNECTION_URL } from "./sec.js";

const app = express();
dotenv.config();

//http://localhost:5000/posts
app.use(cors());

app.use(
  express.json({
    extended: true,
    limit: "10mb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

app.use("/posts", postRoutes);

//
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
