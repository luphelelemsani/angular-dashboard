import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-default",
  template: `
    <app-header (toggleSideBarForMe)="sideBarToggle()"></app-header>

    <mat-drawer-container>
      <mat-drawer mode="side" [opened]="sideBarOpen"
        ><app-sidebar></app-sidebar>
      </mat-drawer>
      <mat-drawer-content><router-outlet></router-outlet></mat-drawer-content>
    </mat-drawer-container>

    <app-footer></app-footer>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      mat-drawer {
        width: 350px;
      }
      mat-drawer-container {
        height: 100%;
      }
      mat-drawer-content {
        padding: 20px;
      }
    `,
  ],
})
export class DefaultComponent implements OnInit {
  sideBarOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  sideBarToggle() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
