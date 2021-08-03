import { ProductserviceService } from './../productservice.service';
import { Product } from './../Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
products:Product[];
  constructor(private productservice:ProductserviceService) { }

  ngOnInit(): void {
    this.getProduct();
  }
getProduct(){
this.productservice.getProduct().subscribe(data=>{
  this.products=data;
})

}
removeItem(id:number){
  this.productservice.deleteProduct(id).subscribe(data=>{
  this.products=  this.products.filter(x=>x.id!=id);
  })
}
}
