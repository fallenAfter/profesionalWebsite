import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent implements OnInit {
  private screenWidth: number = 0;
  public image: string = "";

  constructor() {}

  ngOnInit() {
    this.setScreenWidth();
    this.getImageForScreenWidth();
    console.log(this.image);
  }
  private getImageForScreenWidth() {
    switch (this.screenWidth) {
      default:
        this.image = "http://placekitten.com/g/1920/1080";
    }
  }
  private setScreenWidth() {
    this.screenWidth = window.innerWidth;
  }
}
