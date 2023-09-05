import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

movies:any;
search:any;
studs:any;
booked:any;
stud:any;
email:any;
stu:any;
info:any

res : any = [];

constructor (private http:HttpClient,private router: Router) {}
  ngOnInit(): void {
    this.http.get('http://localhost:4000/user/allmovies')
    .subscribe((res=> {
      this.res = res;
      console.log(this.res)
    }))
     
    this.email = history.state.message;
    
    this.http.get('http://localhost:4000/user/bookings/?email='+this.email)
    .subscribe((res=> {
      this.booked = res;
      console.log(this.booked)
    }))

  }

  
  onfind(data){
    this.http.get('http://localhost:8080/get?id='+data.id)
    .subscribe((result => {
      this.studs=result;
      console.log(this.studs)
    }))
  }

  onget(data){
    this.http.get('http://localhost:8080/get?id='+data.id)
    .subscribe((result => {
      this.stu=result;
      console.log(this.stu)
    }))
  }

 
  onBtnclick()
  {
   
        this.router.navigate(['/login']);      
    
   
  }

  onBook(data)
  {
       var m = data;
        console.log(data);
        this.router.navigate(['/details'], {state: {message:m}});      
  }

  onadd(data){
    this.http.put('http://localhost:8080/adds',data)
    .subscribe((result => {
      this.stud=result;
      window.location.reload();
      console.log(this.stud)
    }))
  }
onsearch(data){
  this.http.get('http://localhost:4000/user/movies/?movie_name='+data)
    .subscribe((result => {
      this.info=result;
      console.log(this.info)
      this.router.navigate(['/details'], {state: {message:this.info.movies[0]}});
    }))
}
  
  }


