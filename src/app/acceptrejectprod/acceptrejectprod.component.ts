import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../Models/product.interface';

@Component({
  selector: 'app-acceptrejectprod',
  template: `
  <div>
    <button (click)="handleCreateBtn()">Create Dummy Product</button>
    <button (click)="handleAcceptBtn($event)">Accept</button>
    <div>
      <button (click)="handleRejectBtn($event)">Reject</button>
      <select [(ngModel)]="selectedOption">
        <option *ngFor="let option of options">
          {{option}}
        </option>
      </select>
    <div>
  </div>`,
  styleUrls: ['./acceptrejectprod.component.scss']
})
export class AcceptrejectprodComponent implements OnInit {
  products: Product[];
  selectedOption: string;
  options: string[] = [
    'Blurry Images',
    'Inappropriate Images',
    'Not Relevant Images'
  ];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => this.products = data);
  }

  handleRejectBtn(event) {
    let id = event.target.parentNode.parentNode.parentNode.parentNode.textContent.match(/\d+/g)[0];
    let option = this.selectedOption;

    if (!option) { return alert('Please select an option!'); }

    const product = this.products.filter(prod => prod['id'] === id)[0];
    product['status'] = 'rejected';
    product['reason'] = option;
    return this.productService.updateProduct(id, product)
            .subscribe(data => console.log(`${id} status product has been updated with rejection status ${option}`))
  }

  handleAcceptBtn(event) {
    const id = event.target.parentNode.parentNode.parentNode.textContent.match(/\d+/g)[0];
    const product = this.products.filter(prod => prod['id'] === id)[0];
    product['status'] = 'approved';

    return this.productService.updateProduct(id, product)
              .subscribe(data => console.log(`${id} status product has been updated to accept`));
  }

  handleCreateBtn() {
    // tslint:disable-next-line: max-line-length
    const product: Product = {'id': '1111222333', 'name': 'Hans Data', 'images': ['PictureOne', 'PictureTwo', 'PictureThree'], 'status': 'pending', 'reason': ''};
    return this.productService.createProduct(product)
              .subscribe(data => console.log(data));
  }
}


  // handleAcceptBtn(event) {
    // Get the current product id and save asynchronously to the database
    // const parentNode = event.target.parentNode.parentNode.parentNode.textContent;
    // const id = parentNode.match(/\d+/g)[0];
    // console.log(id);
    // try {
    //   // Save async to database
    //   // You must call a service to save to database -> ng g s database
    //   // updateProduct(id, reason='accept') {
    //   //    'UPDATE products SET status='accept' WHERE products.id IS ${id}';
    //   // }
    //   this.productService.updateProduct(id);
    // } catch(e) {
    //   console.log('Error saving to database', e);
    // }
    // tslint:disable-next-line: max-line-length
  //   const product = {"id": "11223344", "name": "Louis Vuitton", "images": ["PictureOne", "PictureTwo", "PictureThree"], "status": "pending"};
  //   this.productService.createProduct(product).subscribe((data) => console.log(data));
  // }