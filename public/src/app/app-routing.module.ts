import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserAuthComponent } from "./user-auth/user-auth.component";
import { HabitsComponent } from "./habits/habits.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { NewComponent } from "./habits/new/new.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: UserAuthComponent },
  {
    path: "habits",
    component: HabitsComponent,
    children: [{ path: "new", component: NewComponent }]
  },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
