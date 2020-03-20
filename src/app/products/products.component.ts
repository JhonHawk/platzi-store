import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  clickProduct(id: number) {
    console.log(`Product ${id}`);
  }

}
