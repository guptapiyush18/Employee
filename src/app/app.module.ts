import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { RestService } from './Dbservices/rest.service';
import { AddempComponent } from './addemp/addemp.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpdetailsComponent,
    AddempComponent,
    ManagerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
