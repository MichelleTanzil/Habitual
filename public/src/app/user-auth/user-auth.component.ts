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
  newUser: {};
  loginUser: {};
  errors: {} = {};
  constructor(private _httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.newUser = { email: "", password: "" };
    this.loginUser = { email: "", password: "" };
  }

  register() {
    let obs = this._httpService.register(this.newUser);
    obs.subscribe((data: any) => {
      if (data.hasOwnProperty("errors")) {
        this.errors = data["errors"];
      } else {
        this.router.navigate(["/habits"]);
      }
    });
  }

  login() {
    let obs = this._httpService.login(this.loginUser);
    obs.subscribe((data: any) => {
      if (data.hasOwnProperty("errors")) {
        this.errors = data["errors"];
      } else {
        this.router.navigate(["/habits"]);
      }
    });
  }
  // TODO: html: {{errors}}
}
