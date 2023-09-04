import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({

    movie_name :{
        type: String,
        required: true,
    },
    theatre_name:{
        type: String,
        required: true,
    },
    theatre_location:{
        type: String,
        required: true,
    },
    release_date:{
        type: Date,
        required: true,
    },
});

export default mongoose.model("movies", userSchema);