import { Component, OnInit } from '@angular/core';
import Sawo from "sawo"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Sawo:any;
  isLoggedIn: any=false;
  userPayload:any ={};

  constructor() { }

  ngOnInit() {
    const SawoConfig = {
      containerID: "sawo-container",
      identifierType:"phone_number_sms",
      apiKey:"81ac58f6-3e3f-432c-9236-d10374c6058c",
      onSuccess: (payload:any) => {
        this.userPayload = payload;
        console.log(payload);
        this.isLoggedIn = true;
      }

    };
    this.Sawo = new Sawo(SawoConfig)
  }

  ngAfterViewInit() {
    this.Sawo.showForm();
  }
  
  
}
