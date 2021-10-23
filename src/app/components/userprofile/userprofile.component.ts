import { Component, OnInit } from '@angular/core';
import { Contact, User } from 'src/app/entity/user';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  activeUser: User;
  phoneNumber: string;
  firstName:string;
  lastName: string;
  email:string;
  contactlist: Contact[];

  
  constructor() { }

  ngOnInit() {
    this.getActiveUser();
  }
  getActiveUser() {
    this.activeUser = JSON.parse(sessionStorage.getItem("activeUser"));
    this.phoneNumber = this.activeUser._id;
    this.firstName = this.activeUser.firstname;
    this.lastName = this.activeUser.lastname;
    this.email = this.activeUser.email;
    this.contactlist = this.activeUser.contacts;
  }

}
