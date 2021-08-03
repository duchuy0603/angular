import { ProductserviceService } from './../productservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
products:Product;
  constructor(private router:Router,
    private Productservice:ProductserviceService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getinfo();
  }
  getinfo() {
    this.activatedRoute.params.subscribe(params => {
      this.Productservice.getinfo(params.id).subscribe(data => {
        this.products  = data  ;
      }); 
    });
  }

  onHandleEdit(){
    this.Productservice.updateProduct(this.products).subscribe(data=>{
      alert("bạn đã cập nhật thành công");
      this.router.navigateByUrl("product")
    }
      
    )
}
}
