import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-habits",
  templateUrl: "./habits.component.html",
  styleUrls: ["./habits.component.css"]
})
export class HabitsComponent implements OnInit {
  currentUser: {};
  habits: {}
  constructor(private _httpService: HttpService, private router: Router) {
    this.currentUser = {};
  }
  ngOnInit() {
    this.getCurrentUser();
    this.getAllHabits();
  }
  getCurrentUser() {
    let obs = this._httpService.getCurrentUser();
    obs.subscribe((data: any) => {
      console.log(data);
      if (!data.sessionStatus) {
        this.router.navigate(["/"]);
      } else {
        this.currentUser = data;
      }
    });
  }
  logout() {
    let obs = this._httpService.logout();
    obs.subscribe(() => {
      console.log("Successfully logged out");
      this.router.navigate(["/"]);
    });
  }
  getAllHabits() {
    let observable = this._httpService.getAllHabits();
    observable.subscribe((data: object) => {
      console.log("Got our data!", data);
      this.habits = data;
    });
  }
}
