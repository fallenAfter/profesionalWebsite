import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { SideNavState } from "./shared/layout/navigation/navigation.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild("drawer", { static: false }) drawer: MatSidenav;
  title = "professionalWebsite";
  public toggleDrawer(state: SideNavState) {
    this.drawer.toggle();
  }
}
