import { Component } from '@angular/core';
import { Card } from "../card/card";
import { Api } from '../api';

@Component({
  selector: 'app-product',
  imports: [Card],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  
  items:any;

  constructor(private api: Api) {}
  item: any[] = [];

  ngOnInit(){
    this.api.getProducts().then(product => {
      this.item =product;
    });
  }
}
