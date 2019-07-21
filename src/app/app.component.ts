import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}

/*
4 types of data binding in Angular:
####################################################
Interpolation: {{pageTitle}}
Property binding: <img [src]='product.imageUrl'>
Event Binding: <button (click)='toggleImage()'>
Two-way binding: <input [(ngModel)]='listFilter' />

Checklist: ngModel:

product-list.component.html
<input type="text" [(ngModel)]="listFilter" />

app.module.ts
@NgModule({
  imports: [... FormsModule], <!-- to make the ngModel availabale to all the components in this module
  declarations: [ AppComponent, ProductListComponent... ] <!-- it's available to these components
})


Default pipes
#####################################################
{{ product.price | currency | lowercase }}
{{ product.price | currency: 'USD':'symbol':'1.2-2' }}


Improving our components:
############################

Strong typing & interfaces
Encapsulating styles
Lifecycle hooks
Custom pipes
Nested components

Interface is a specification
#############################
export interface IProduct {
  productId: number;
  productName: string;
  calculateDiscount(percent: number): number;
}

Using an interface as a data type
#################################

import { IProduct } from './product';

export class ProductListComponent {
  ...
  // products: any[] = [];
  products: IProduct[] = [...];
  ...
}

*/
