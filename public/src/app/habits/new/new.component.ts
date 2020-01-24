import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  newHabit: {};
  currentUser: {};

  constructor(private _httpService: HttpService, private router: Router) {
    this.currentUser = {};
    this.newHabit = {
      title: "",
      importance: "",
      frequency: "",
      habitType: ""
    };
  }

  ngOnInit() {
    this.getCurrentUser();
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
}