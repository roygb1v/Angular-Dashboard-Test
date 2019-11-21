import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductStatusComponent } from './product-status/product-status.component';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcceptRejectProductComponentComponent } from './accept-reject-product-component/accept-reject-product-component.component';
import { AcceptrejectprodComponent } from './acceptrejectprod/acceptrejectprod.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    ProductStatusComponent,
    AcceptRejectProductComponentComponent,
    AcceptrejectprodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
