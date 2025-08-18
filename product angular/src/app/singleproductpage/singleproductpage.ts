import { Component } from '@angular/core';
import { Api } from '../api';
import { ActivatedRoute } from '@angular/router';
import { Card } from "../card/card";

@Component({
  selector: 'app-singleproductpage',
  imports: [Card],
  templateUrl: './singleproductpage.html',
  styleUrl: './singleproductpage.css'
})
export class Singleproductpage {
items: any;
  
 constructor(private api:Api,private route:ActivatedRoute){}

  product:any;

  ngOnInit(){
    let id=this.route.snapshot.params['id'];

    this.api.getProductsById(id).then((res: any) => this.product = res);
  }
}

