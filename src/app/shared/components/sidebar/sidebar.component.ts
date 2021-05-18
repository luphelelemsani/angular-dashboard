import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  template: `
    <mat-nav-list>
      <div class="profile-card">
        <div class="header">
          <h2>Andile Msani</h2>
          <h4>andilemaashmsani@gmail.com</h4>
        </div>
        <img
          src="https://material.angular.io/assets/img/examples/shiba2.jpg"
          alt="Andile Msani"
        />
      </div>
      <mat-divider></mat-divider>
      <h2 matSubheader>Pages</h2>
      <a mat-list-item routerLinkActive="list-item-active" routerLink="/"
        >Dashboard</a
      >
      <a mat-list-item routerLinkActive="list-item-active" routerLink="/posts"
        >Posts</a
      >
      <a
        mat-list-item
        routerLinkActive="list-item-active"
        routerLink="/articles"
        >Articles</a
      >
      <mat-divider></mat-divider>
      <h2 matSubheader>Tools</h2>
      <a
        mat-list-item
        routerLinkActive="list-item-active"
        routerLink="/contacts"
        ><mat-icon>import_contacts</mat-icon>Contacts</a
      >
      <a
        mat-list-item
        routerLinkActive="list-item-active"
        routerLink="/contacts"
        ><mat-icon>contact_phone</mat-icon> Leads</a
      >
      <mat-divider></mat-divider>
    </mat-nav-list>
  `,
  styles: [
    `
      .profile-card {
        text-align: center;
        padding: 0 20px 20px 20px;
      }
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
      }
      .mat-icon {
        vertical-align: middle;
        margin-right: 20px;
      }
    `,
  ],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
