import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private service:ProductService) { }
  products!: Product[];
  ngOnInit(): void {
    this.service.getAllProducts().subscribe(x=>this.products=x)
  }
  delete(id:string){
    this.products=this.products.filter(p=>p._id!==id)
    this.service.deleteProductById(String(id)).subscribe(x=>console.log(x));
  }
}
