import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { UserAuthComponent } from './user-auth/user-auth.component';
import { HabitsComponent } from './habits/habits.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewComponent } from './habits/new/new.component';

@NgModule({
  declarations: [AppComponent, UserAuthComponent, HabitsComponent, PagenotfoundComponent, NewComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
