import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private service:ProductService,private route:ActivatedRoute) { }
  product!: Product;
  ngOnInit(): void {

    const id=this.route.snapshot.paramMap.get('id') ;
    this.service.getProductById(String(id)).subscribe(x=>this.product=x);
  }

}
