import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  movie: any;
  res:any;
  email:any;
  date:any;
  obj:any;
  seats:boolean=false;
  ticket:any;
  seatsec = 'seat';
  seatsec1 = 'seat';
  currentDate = new Date();
  constructor(private http:HttpClient,private router: Router) { }
  
  ngOnInit(): void {
    console.log(history.state);
    this.movie = history.state;
    console.log(this.currentDate.toDateString())
  }

  onclick(){
    this.seats = !this.seats;
  }

  onselect1(){
   this.seatsec = 'seat_selected';
  }
  onselect2(){
    this.seatsec1 = 'seat_selected';
   }  
   
   book(data,mail){
     this.obj = {
      "movie_name": this.movie.message.movie_name,
      "number_of_seats": data,
      "theatre_name": this.movie.message.theatre_name,
      "booking_date" : this.currentDate.toDateString(),
      "email": mail
     }
     console.log(this.obj);
     this.http.post('http://localhost:4000/user/bookmovie',this.obj)
    .subscribe((res=> {
      this.res = res;
      console.log(this.res)
      this.router.navigate(['/grid'], {state: {message:mail}});
    }))
   }

}
