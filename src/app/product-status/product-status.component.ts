import { Component, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "filter-component",
  template: `
    <select [(ngModel)]="selected" (ngModelChange)="onStatusSelected($event)">
      <option *ngFor="let option of options" [value]="option">{{option}}</option>
    </select>
  `,
  styleUrls: ["./product-status.component.scss"]
})
export class ProductStatusComponent implements OnInit {
  selected: string = 'pending'
  options: string[] = ["Pending", "Approved", "Rejected"];
  constructor() {}

  ngOnInit() {
    this.onStatusSelected('pending');
  }

  @Output() exampleOutput = new EventEmitter<string>();

  exampleMethodChild(statusValue) {
    this.exampleOutput.emit(statusValue);
  }

  onStatusSelected(val: any) {
    return this.exampleMethodChild(val.toLowerCase());
  }
}