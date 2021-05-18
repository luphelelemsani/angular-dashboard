import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <mat-divider></mat-divider>
    <footer>&copy; All rights reserved 2021</footer>
  `,
  styles: [
    `
      footer {
        padding: 20px;
        text-align: center;
      }
    `,
  ],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
