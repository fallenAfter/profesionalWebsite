import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { SideNavState } from "../navigation/navigation.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  private nav: SideNavState = "closed";
  @Output() public navState: EventEmitter<SideNavState> =
    new EventEmitter<SideNavState>();
  constructor() {}

  ngOnInit() {
    this.toggleNavState();
  }
  public toggleNav() {
    this.nav = this.nav === "closed" ? "open" : "closed";
    this.toggleNavState();
  }
  private toggleNavState() {
    console.log("set", this.nav);
    this.navState.emit(this.nav);
  }
}
