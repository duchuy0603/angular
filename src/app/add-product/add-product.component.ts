import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
products:Product=new Product();
  constructor(private router:Router,
    private productservice:ProductserviceService
    ) { }

  ngOnInit(): void {
  }
onHandleAdd(){
  this.productservice.AddProduct(this.products).subscribe(data=>{
    this.router.navigateByUrl('/product')
  })
}
}
