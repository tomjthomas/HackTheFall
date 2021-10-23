
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';import { Router } from '@angular/router';
import { Contact, User } from '../../entity/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})


export class RegisterComponent implements OnInit {
  newUser: string;
  phno_id: string;
  message1: string = "";
  isShown:boolean=true;
  isShown2:boolean=false;
  contactDetails: Contact[] = [];

  constructor(private serviceMethod: UserService, private router: Router) {}
  
  ngOnInit() {
    this.phno_id = JSON.parse(sessionStorage.getItem("newUser"));
    
  }
  toggleShow()
  {
    this.isShown = !this.isShown;
    this.isShown2 = !this.isShown2;
  }
  createContact(name,phno,email,rln)
  {
    let contact:Contact = {name:name,phoneno:phno,email:email,relationship:rln}
    return contact;
  }

  register(firstname, lastname, email,name1, name2, name3, ph1, ph2, ph3, email1, email2, email3, rln1, rln2, rln3) {
    let obj = {
    firstname : firstname,
    lastname : lastname,
    phoneno : this.phno_id,
    email : email,
    contacts : []
    }
    this.contactDetails.push(this.createContact(name1,ph1,email1,rln1));
    this.contactDetails.push(this.createContact(name2,ph2,email2,rln2));
    this.contactDetails.push(this.createContact(name3,ph3,email3,rln3));
    obj.contacts = this.contactDetails;
    //console.log(this.obj.contacts);
    this.serviceMethod.registerUser(obj).subscribe((response)=>{if(response.status === "User Created") {
      console.log("Created");
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem(
      "activeUser",
      JSON.stringify(response.result)
    ); this.router.navigate(["/home"]); } 
    else {console.log("Failed");this.message1="Registration failed"}});
  }
}
