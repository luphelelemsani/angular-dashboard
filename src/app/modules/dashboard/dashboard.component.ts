import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../dashboard.service";

@Component({
  selector: "app-dashboard",
  template: ` <div><app-widget-area></app-widget-area></div>
    <br />
    <mat-divider></mat-divider>
    <br />
    <div
      fxLayout="row"
      fxLayoutAlign="space-between center"
      fxLayoutGap="20px"
      class="stats-cards"
    >
      <mat-card fxFlex="25">
        <app-widget-card
          label="Users"
          total="18K"
          percentage="50"
          [data]="cards"
        ></app-widget-card>
      </mat-card>
      <mat-card fxFlex="25" la>
        <app-widget-card
          label="Users Engagement"
          total="8K"
          percentage="40"
          [data]="cards"
        ></app-widget-card>
      </mat-card>
      <mat-card fxFlex="25">
        <app-widget-card
          label="Users Retention"
          total="6K"
          percentage="30"
          [data]="cards"
        ></app-widget-card>
      </mat-card>
      <mat-card fxFlex="25">
        <app-widget-card
          label="Referrals"
          total="2K"
          percentage="20"
          [data]="cards"
        ></app-widget-card>
      </mat-card>
    </div>
    <br />
    <mat-divider></mat-divider>
    <br />
    <div fxLayout="row" fxLayoutAlign="space-between center" fxLayoutGap="20px">
      <div fxFlex="60"><app-table></app-table></div>
      <div fxFlex="40"><app-widget-pie></app-widget-pie></div>
    </div>`,
  styles: [],
})
export class DashboardComponent implements OnInit {
  bigChart = [];
  cards = [];
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
  }
}
