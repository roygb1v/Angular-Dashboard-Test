import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Models/product.interface';
import { ProductsService } from '../products.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AcceptrejectprodComponent } from '../acceptrejectprod/acceptrejectprod.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'product-dashboard',
  template: `
    <div>
      <h2>This belongs to the product dashboard</h2>
      {{statusTitle}}
      <filter-component
        (exampleOutput)="exampleMethodParent($event)">
      </filter-component>
        <div *ngFor="let product of products">
          <div cdkDropList
          cdkDropListOrientation="horizontal"
          (cdkDropListDropped)="drop($event)"
          class="container"
          *ngIf="product.status === selectedStatus">
            {{ product.id }}
            <div *ngIf="product.status === 'rejected'">
              <h1>{{product.reason}}</h1>
            </div>
            <app-acceptrejectprod></app-acceptrejectprod>
            <div class="image-container">
              <div cdkDrag class="productImage" *ngFor="let image of product.images">
                  {{ image }}
              </div>
            </div>
          </div>
        </div>
      </div>
  `,
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  constructor(private getProductService: ProductsService) {}
  selectedStatus: string;

  @Input()
  statusTitle: string;

  public products: Product[] = [];

  ngOnInit() {
    return this.getProductService.getProducts()
      .subscribe(data => this.products = data);
  }

  exampleMethodParent(event: string) {
    this.selectedStatus = event;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.products, event.previousIndex, event.currentIndex);
  }
}