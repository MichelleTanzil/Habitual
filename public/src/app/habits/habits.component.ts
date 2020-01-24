import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-habits",
  templateUrl: "./habits.component.html",
  styleUrls: ["./habits.component.css"]
})
export class HabitsComponent implements OnInit {
  constructor(private _httpService: HttpService, private router: Router) {}
  currentUser: {} = {};
  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    let obs = this._httpService.getCurrentUser();
    obs.subscribe((data: any) => {
      if (!data.sessionStatus) {
        this.router.navigate(["/"]);
      } else {
        this.currentUser = data;
      }
    });
  }
  // logout() {
  //   let obs = this._httpService.logout();
  //   obs.subscribe(() => {
  //     console.log("Successfully logged out");
  //   });
  // }
}
