import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({

    movie_name: {
        type: String,
        required: true,
      },
    number_of_seats: {
        type: Number,
        required: true,
      },
    theatre_name: {
        type: String,
        required: true,
      },
    booking_date: {
        type: Date,
        required: true,
      },
      email:{
        type: String,
        required: true,
    },

});

export default mongoose.model("books", userSchema);