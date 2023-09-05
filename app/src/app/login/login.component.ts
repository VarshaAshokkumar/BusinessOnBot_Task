import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  result:any;
  status:boolean=false;
  hide = true;
  constructor( private http:HttpClient,private router: Router){}
  onSubmit(data)
  {
    console.log(data);
    this.http.post('http://localhost:4000/user/login',data)
    .subscribe((result)=>{
      console.warn(result);
      this.result=result;
      this.router.navigate(['/grid']);      
    })

    
  }

  ngOnInit(): void {
    
  }
  onclick(){
    this.status = !this.status;
  }

  onsignup(data)
  {
    console.log(data);
    this.http.post('http://localhost:4000/user/signUp',data)
    .subscribe((result)=>{
      console.warn(result);
      this.result=result;
      this.status = !this.status;      
    })
  }



}
