import { Component, OnInit } from '@angular/core';
import { User } from 'src/User';
import { RestService } from '../Dbservices/rest.service';


@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  constructor(private restService:RestService) {
    this.setFlag()
   }
  
   nn:string=this.restService.gettnn()
   
  
  flag1=true
  app=true
  salar
  user:User
  
setFlag(){
  
  if(this.nn=="Administrator")
  { 
    
      this.flag1=false
      
      alert(this.flag1)
      this.app=false;
  }
 
}
  
  
  ngOnInit() {
    
  
  }

  getItem(id)
  {
    this.restService.getUser(id).subscribe((response)=>{ 
      this.user=response.json(),
      this.app=!this.app;
      
    },(error=>alert("User Id not found")))
    
  }

  register(id,name,add,email,mob,pass,passre,op,saal)
  {
    if(op=="Employee")
      {
        this.salar="30000"
      }
      else if(op=="Manager")
      {
        this.salar="50000"
      }
      else if(op=="Administrator")
      {
        this.salar="90000"
      }
    let user1=new User(id,name,add,email,mob,pass,op,this.salar)
    
      
    
    this.restService.changeUser(user1,id)
    .subscribe((response:any)=>alert("Added Successfully"),
    (error)=>alert(error))

    
  }
  
 
 
  }

