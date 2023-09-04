import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; 
import userRouter from "./routes/routes";
import bookingRouter from "./routes/routes";

dotenv.config();

const app = express();

// Use the 'cors' middleware with specific configuration
app.use(
  cors({
    origin: "http://localhost:4200", 
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

// Other middleware
app.use(express.json());
app.use("/user", userRouter);
app.use("/booking", bookingRouter);

mongoose
  .connect(
    'mongodb+srv://admin:kqrJxM7j08XvdDKs@cluster0.2uarvyj.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() =>
    app.listen(4000, () =>
      console.log("Connected to Database And Server is running")
    )
  )
  .catch((e) => console.log(e));
