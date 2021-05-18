import { Output, EventEmitter } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <button mat-icon-button (click)="toggleSideBar()">
          <mat-icon>menu</mat-icon>
        </button>
        <span>My LOGO</span>
        <div fxFlex fxLayout="row" fxLayoutAlign="flex-end">
          <ul fxLayout="row" fxLayoutGap="20px">
            <li>
              <button mat-icon-button><mat-icon>settings</mat-icon></button>
            </li>
            <li>
              <button mat-icon-button><mat-icon>help_outline</mat-icon></button>
            </li>
            <li>
              <button mat-button [matMenuTriggerFor]="menu">
                <mat-icon>person_outline</mat-icon>
              </button>
              <mat-menu #menu="matMenu">
                <button mat-icon-button>
                  <mat-icon>exit_to_app</mat-icon>
                  Sign out
                </button>
              </mat-menu>
            </li>
          </ul>
        </div>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: [
    `
      ul li {
        list-style: none;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
}
