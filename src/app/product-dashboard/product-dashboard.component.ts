import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../Models/product.interface";
import { ProductsService } from '../products.service';

@Component({
  selector: "product-dashboard",
  template: `
    <div>
      <h2>This belongs to the product dashboard</h2>
      {{statusTitle}}
      <filter-component
        (exampleOutput)="exampleMethodParent($event)">
      </filter-component>
      
      <ul>
        <li *ngFor="let product of products">
          <div *ngIf="product.status === selectedStatus">
            {{ product.id }}
            <div class="productImage" *ngFor="let image of product.images">
              {{ image }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ["./product-dashboard.component.scss"]
})
export class ProductDashboardComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) {}
  selectedStatus: string;

  @Input()
  statusTitle: string;

  public products: Product[] = [];

  ngOnInit() {
    return this._ProductsService.getProducts()
      .subscribe(data => this.products = data);
  }

  exampleMethodParent(event: string) {
    this.selectedStatus = event;
  }
}
