import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  today  = new Date();

  constructor() {
    console.log('constructor');
  }

  // ngOnChanges(changes: SimpleChanges){
  //   console.log(changes, 'ngOnChanges')
  // }
  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}
