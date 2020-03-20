import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/products.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private router: Router,
    private activedRouter: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.activedRouter.params.subscribe(params =>{
      const id = params.id;
      this.getById(id);
    });
  }

  getById(id: string){
    this.product = this.productService.getProduct(id)
  }


}
