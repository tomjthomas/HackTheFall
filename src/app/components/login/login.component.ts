import { Component, OnInit } from "@angular/core";
import { CheckboxRequiredValidator } from "@angular/forms";
import { Router } from "@angular/router";
import Sawo from "sawo";
import { UserService } from "../../services/user.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  Sawo: any;
  isLoggedIn: any = false;
  userPayload: any = {};

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (this.isLoggedIn) {
      this.router.navigate(["/", "home"]);
    }
    const SawoConfig = {
      containerID: "sawo-container",
      identifierType: "phone_number_sms",
      apiKey: "81ac58f6-3e3f-432c-9236-d10374c6058c",
      onSuccess: (payload: any) => {
        this.userPayload = payload;
        this.userService
          .checkIfUserExists(payload.identifier)
          .subscribe((response) => {
            if (response.status === "User exists") {
              this.isLoggedIn = true;
              sessionStorage.setItem("isLoggedIn", "true");
              sessionStorage.setItem(
                "activeUser",
                JSON.stringify(response.result)
              );
              console.log("Response:", response);
              this.router.navigate(["/home"]);
            } else {
              this.router.navigate(["/register"]);
            }
          });
      },
    };
    this.Sawo = new Sawo(SawoConfig);
  }

  ngAfterViewInit() {
    this.Sawo.showForm();
  }
}
