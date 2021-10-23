import { Component, OnInit } from "@angular/core";
import { ApiCallService } from "src/app/services/api-call.service";
import { fakeCallNumber, sosMessage } from "../../entity/user";

@Component({
  selector: "app-sos",
  templateUrl: "./sos.component.html",
  styleUrls: ["./sos.component.css"],
})
export class SOSComponent implements OnInit {
  lat: number;
  lng: number;
  message: string = "Send help";
  status: string;
  phonenumber: string;
  obj: sosMessage;
  objFake: fakeCallNumber;

  constructor(private serviceMethod: ApiCallService) {}

  ngOnInit() {}

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat, this.lng);
        this.obj = new sosMessage();
        this.obj.user = JSON.parse(sessionStorage.getItem('activeUser'));
        //console.log(this.obj.user);
        this.obj.lat = this.lat;
        this.obj.long = this.lng;
        this.obj.message = this.message;
        this.serviceMethod.sosMessage(this.obj).subscribe(() => {
         this.status = "SOS Message sent";
        });
      });
    } else {
      alert("Give permission");
      //console.log("Give permission")
    }
  }
  FakeCall() {
    this.objFake = new fakeCallNumber();
    this.objFake.user = "9400881089";
    this.serviceMethod.fakeCall(this.objFake).subscribe(() => {
      this.status = "Call made";
    });
  }
}
