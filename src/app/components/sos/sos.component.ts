import { Component, OnInit } from "@angular/core";
import { ApiCallService } from "src/app/services/api-call.service";
import { fakeCallNumber, sosMessage, User } from "../../entity/user";

@Component({
  selector: "app-sos",
  templateUrl: "./sos.component.html",
  styleUrls: ["./sos.component.css"],
})
export class SOSComponent implements OnInit {
  activeUser: User;
  message: string;
  status: string;

  constructor(private serviceMethod: ApiCallService) {}

  ngOnInit() {
    this.getActiveUser();
  }

  getActiveUser() {
    this.activeUser = JSON.parse(sessionStorage.getItem("activeUser"));
  }

  getUserLocation() {
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
    let objFake = new fakeCallNumber();
    objFake.user = this.activeUser._id;
    this.serviceMethod.fakeCall(objFake).subscribe(() => {
      this.status = "Call made";
    });
  }
}
