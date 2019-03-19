import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/rx'



@Injectable({
  providedIn: 'root'
})
export class RestService {
sendid
sendrole
nn
setnn(ab)
{
  this.nn=ab
  //alert(this.nn)
}
gettnn()
{
  return this.nn
}
  constructor(private http:Http) { }
  url:string="http://localhost:3000/Datab/"

  
  getUser(id)
  {
    this.sendid=id
    
    return this.http.get(this.url+id)
    .map((response:any)=>response)
  }

  changeUser(user,id)
  {
    return this.http.put(this.url+id,user)
    .map((response:any)=>response.json())
  }
  postUser(user)
  {
    return this.http.post(this.url,user)
    .map((response)=>response)
  }
}
