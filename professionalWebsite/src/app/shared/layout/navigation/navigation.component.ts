import { Component, OnInit } from "@angular/core";

export type SideNavState = "open" | "closed";
@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
