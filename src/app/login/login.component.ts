import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../Dbservices/rest.service';
import { User } from 'src/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private rest:RestService) { }
user:User={id:"",Name:"",Address:"",Email:"",MobileNumber:"",Password:"",Role:"",Salary:""}
  ngOnInit() {

  }
  flag:boolean
nav(id,pass,op)
{

  this.rest.getUser(id).subscribe((response)=>{
    this.user=response.json()
    if((this.user.Password===pass) && (this.user.Role===op))
    {
      if(this.user.Role=="Employee")
        this.router.navigate(['emp'])
      if(this.user.Role==="Manager")
      {
        this.router.navigate(['managerView'])
      }
      if(this.user.Role==="Administrator")
      {
        this.rest.setnn("Administrator");
        this.router.navigate(['addemp'])
      }
    }
    else{
      alert("Wrong input")
    }
  
  },
  (error)=>alert("User Id Not Found"))
 }
}