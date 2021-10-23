import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import Sawo from "sawo";
import { User } from "../../entity/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  obj: User;
  message1: string = "";
  v_type: string = "";

  constructor(private serviceMethod: UserService, private fb: FormBuilder) {}
  ngOnInit() {}

  register(firstname, lastname, phno, email) {
    this.obj.firstname = firstname;
    this.obj.lastname = lastname;
    this.obj._id = phno;
    this.obj.email = email;
    //this.serviceMethod.RegisterUser(this.obj).subscribe(data=>{if(data) {this.router.avigate()})};
  }
}
