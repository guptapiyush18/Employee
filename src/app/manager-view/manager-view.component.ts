import { Component, OnInit } from '@angular/core';
import { RestService } from '../Dbservices/rest.service';
import { User } from 'src/User';

@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.css']
})
export class ManagerViewComponent implements OnInit {
  cp:boolean=false;
  res="";
  iid=this.restService.sendid
  uid=""
   constructor(private restService:RestService) { 
     
   }
   user:User={id:"",Name:"",Address:"",Email:"",MobileNumber:"",Password:"",Role:"",Salary:""}
   user1:User={id:"",Name:"",Address:"",Email:"",MobileNumber:"",Password:"",Role:"",Salary:""}
   ngOnInit() {
     this.restService.getUser(this.iid).subscribe((response:any)=>this.user=response.json())
   }
 
  uuid(uid)
  {
this.uid=uid

  }
 changepass()
 {
  this.restService.getUser(this.uid).subscribe((response:any)=>this.user1=response.json())
   this.cp=true
 }
 
 change(salary)
   {
    this.restService.getUser(this.uid).subscribe((response:any)=>this.user1=response.json())
     this.user1.Salary=salary
     this.restService.changeUser(this.user1,this.user1.id)
     .subscribe(
       (respose:any)=>{
         this.res="Salary Updated"
         alert("Salary Updated")
       }
       
     )
   }
 }
 