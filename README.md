# Movie Ticket Booking System

This project is a Movie Ticket Booking System designed to provide users with a convenient way to book movie tickets online. It offers features like user registration, movie browsing, seat selection, and booking confirmation notifications. The system is built using Angular for the frontend and Node.js with Express.js for the backend. MongoDB is used to store customer, movie, and booking information.

## Features

1. **User Registration and Authentication:**
   - Users can securely register for an account and log in using their email and password.

2. **Browse Movies:**
   - Movie data is stored in the database and displayed for users to browse.
   - Movies are categorized by release year.

3. **View Showtimes:**
   - Users can view hard-coded showtimes (e.g., 10AM, 2PM, 6PM, 10PM) for selected movies.
   - Showtimes display date, time, and theater location.

4. **Seat Selection:**
   - Users can select seats for their desired showtime.
   - The system supports booking multiple seats (up to 10 seats).

5. **Booking Confirmation and Notifications:**
   - Upon successful booking, users receive email confirmations.
   - Email services like SendGrid and Juvlon are used for notifications.
   - Confirmation emails include movie name, showtime, seat details, and a QR code.

6. **Booking History:**
   - Users have access to a booking history that lists past and upcoming bookings.
   - Booking confirmation emails are sent for each booking.

## Database Schemas

### Users Schema
- `name`: User's name
- `email`: User's email (unique)
- `password`: User's password

### Movies Schema
- `movie_name`: Name of the movie
- `release_year`: Year of movie release
- Add more movie-related fields as needed

### Bookings Schema
- `movie_name`: Name of the booked movie
- `number_of_seats`: Number of seats booked
- `theatre_name`: Name of the theater
- `booking_date`: Date and time of booking
- `email`: User's email associated with the booking

## Deployment

The frontend and backend components of this application are deployed to the following URLs:

- Frontend: ""
- Backend: "https://business-on-bot---task-backend.glitch.me"

## How to Run Locally

1. Clone this repository.
2. Install dependencies for the frontend and backend separately.
3. Set up your database (MongoDB) and update connection configurations.
4. Run the frontend and backend servers.



## Screenshots



## Contributing

Contributions are welcome! If you'd like to contribute to this project, please open an issue or submit a pull request.



