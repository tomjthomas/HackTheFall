import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/entity/user";
import { ApiCallService } from "src/app/services/api-call.service";
import { AuthService } from "src/app/services/auth.service";
import { fakeCallNumber, sosMessage } from "../../entity/user";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  activeUser: User;
  message: string;
  status: string;

  constructor(
    private serviceMethod: ApiCallService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getActiveUser();
  }

  getActiveUser() {
    this.activeUser = JSON.parse(sessionStorage.getItem("activeUser"));
  }

  sendSOS() {
    console.log("Getting Location");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        let sosMessageObj = new sosMessage();
        sosMessageObj.user = this.activeUser._id; //localStorage.getItem('phonenumber');
        sosMessageObj.lat = lat;
        sosMessageObj.long = lng;
        sosMessageObj.message = this.message;
        this.serviceMethod.sosMessage(sosMessageObj).subscribe(() => {
          this.status = "SOS Message sent";
        });
      });
    } else {
      alert("Give permission");
      //console.log("Give permission")
    }
  }
  fakeCall() {
    console.log("Calling");
    let objFake = new fakeCallNumber();
    objFake.user = this.activeUser._id;
    this.serviceMethod.fakeCall(objFake).subscribe(() => {
      this.status = "Call made";
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
