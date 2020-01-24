import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { registerLocaleData } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  //User
  register(newUser: any) {
    return this._http.post("/api/register", newUser);
  }
  login(loginUser: any) {
    return this._http.post("/api/login", loginUser);
  }
  getCurrentUser() {
    return this._http.get("/api/current-user");
  }
  logout() {
    return this._http.delete("/api/logout");
  }
  // Habit
}
