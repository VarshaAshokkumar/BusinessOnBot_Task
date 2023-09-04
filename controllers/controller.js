import Movies from "../models/Movies";
import User from "../models/User";
import Book from "../models/Book";

export const getAllUsers = async (req, res , next) => {
 let users;
 try{
    users = await User.find()
 }
 catch(err){
    return next(err);
 }

 if (!users) {
    return res.status(500).json({message:"Unexpected error Occured" });
 }

 return res.status(200).json({ users });

};

export const signUp = async (req, res , next) => {
 
    const { name,email,password} = req.body;
    if(!name && name.trim()==="" && !email && email.trim()==="" && !password && password.trim()==="" ){
            return res.status(422).json({message:"Invalid Inputs"});
    }
    let user;
    try{

        user = new User({name,email,password});
        user = await user.save();
     }
    catch(err)
    {
      return next(err);
    }  
    if (!user) {
        return res.status(500).json({message:"Unexpected error Occured" });
     }
    
     return res.status(201).json({ user });
    

};

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(422).json({ message: 'Invalid Inputs' });
    }
  
    let existingUser;
  
    try {
      existingUser = await User.findOne({ email });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  
    if (!existingUser) {
      return res.status(401).json({ message: 'User not found' });
    }
  
    const savedPlainTextPassword = existingUser.password;
  
    if (password === savedPlainTextPassword) {
      return res.status(200).json({ message: 'Authentication successful' });
    } else {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  };
  
  export const getAllMovies = async (req, res , next) => {
    let movies;
    try{
       movies = await Movies.find()
    }
    catch(err){
       return next(err);
    }
   
    if (!movies) {
       return res.status(500).json({message:"Unexpected error Occured" });
    }
   
    return res.status(200).json({ movies });
   
   };

 export const searchMovie = async (req, res , next) => 
   {const movieName = req.query.movie_name;

   try {
     if (!movieName) {
      
       return res.status(400).json({ message: 'Missing query parameter: movie_name' });
     }
 
     const movies = await Movies.find({ movie_name: movieName });
 
     if (!movies || movies.length === 0) {
       
       return res.status(404).json({ message: 'No movies found' });
     }
 
    
     return res.status(200).json({ movies });
   } catch (err) {
    
     return next(err);
   }
 };
  
 export const createBooking = async (req, res, next) => {
  const { movie_name, number_of_seats, theatre_name, booking_date, email } = req.body;

 
  if (!movie_name || !number_of_seats || !theatre_name || !booking_date || !email) {
    return res.status(422).json({ message: 'Invalid Inputs' });
  }

  if (isNaN(Number(number_of_seats))) {
    return res.status(422).json({ message: 'Invalid number_of_seats' });
  }

 
  // if (!Array.isArray(seat_numbers)) {
  //   return res.status(422).json({ message: 'seat_numbers must be an array' });
  // }

  
  // if (seat_numbers.length !== Number(number_of_seats)) {
  //   return res.status(422).json({ message: 'The count of seat_numbers must match number_of_seats' });
  // }

 
  // if (seat_numbers.length > 10) {
  //   return res.status(422).json({ message: 'The maximum number of seat_numbers is 10' });
  // }

  let newBooking;
  try {
    
    newBooking = new Book({
      movie_name,
      number_of_seats,
      theatre_name,
      booking_date,
      email
    });

    
    newBooking = await newBooking.save();
  } catch (err) {
    return next(err);
  }

  if (!newBooking) {
    return res.status(500).json({ message: 'An unexpected error occurred, and the ticket could not be booked' });
  }

  return res.status(201).json({ message: 'Booking created successfully' });
};

export const findBookings = async (req, res, next) => {
  const email = req.query.email; 

  try {
    if (!email) {
      return res.status(400).json({ message: 'Missing query parameter: email' });
    }

    const bookings = await Book.find({ email: email }); 

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found' });
    }

    return res.status(200).json({ bookings });
  } catch (err) {
    return next(err);
  }
};

