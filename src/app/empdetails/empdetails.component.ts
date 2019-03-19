import { Component, OnInit } from '@angular/core';
import { RestService } from '../Dbservices/rest.service';
import { User } from 'src/User';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
 cp:boolean=false;
 res="";
 iid=this.restService.sendid
  constructor(private restService:RestService) { 
    
  }
  user:User;
  ngOnInit() {
    this.restService.getUser(this.iid).subscribe((response:any)=>this.user=response.json())
  }

 
changepass()
{
  this.cp=true
}

change(pass)
  {

    this.user.Password=pass
    this.restService.changeUser(this.user,this.user.id)
    .subscribe(
      (respose:any)=>{
        this.res="Password Changed"
        alert("Password Changed")
      }
      
    )
  }
}
