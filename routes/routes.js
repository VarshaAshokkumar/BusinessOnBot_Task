import express  from "express";
import {getAllMovies, getAllUsers, login, searchMovie, signUp, createBooking, findBookings } from "../controllers/controller";

const userRouter = express.Router();
//const bookingRouter = express.Router();


userRouter.get("/alluser",getAllUsers); //localhost:4000/user/alluser
userRouter.post("/signup",signUp);
userRouter.post("/login",login);
userRouter.get("/allmovies",getAllMovies);
userRouter.get("/movies",searchMovie);
userRouter.post("/bookmovie",createBooking);
userRouter.get("/bookings",findBookings);


export default userRouter;