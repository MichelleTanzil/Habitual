import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-auth",
  templateUrl: "./user-auth.component.html",
  styleUrls: ["./user-auth.component.css"]
})
export class UserAuthComponent implements OnInit {
  newUser: {} = {};
  loginUser: {} = {};
  registerErrors: {} = {};
  loginErrors: {} = {};
  constructor(private _httpService: HttpService, private router: Router) {
    this.newUser = {
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    };
    this.loginUser = { email: "", password: "" };
    this.registerErrors = { errors: "" };
    this.loginErrors = { errors: "" };
  }

  ngOnInit() {}

  register() {
    let obs = this._httpService.register(this.newUser);
    obs.subscribe((data: any) => {
      if (data.hasOwnProperty("errors")) {
        console.log(data);
        this.registerErrors = data;
      } else {
        this.router.navigate(["/habits"]);
      }
    });
  }

  login() {
    let obs = this._httpService.login(this.loginUser);
    obs.subscribe((data: any) => {
      if (data.hasOwnProperty("errors")) {
        console.log(data);
        this.loginErrors = data;
      } else {
        this.router.navigate(["/habits"]);
      }
    });
  }
}
