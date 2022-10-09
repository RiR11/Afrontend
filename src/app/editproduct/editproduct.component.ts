import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
 //form declared
 product: Product = new Product();
 id!: string | null;
 registerForm!: FormGroup;
 submitted: boolean = false;
 //builder dependency injected through constructor
  constructor(private builder: FormBuilder, 
    private service: ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.paramMap.get('id');
      this.service.getProductById(String(this.id)).subscribe(x=>this.product=x);
      this.registerForm = this.builder.group({
        productCode: ['', Validators.required],
        productName: ['', Validators.required],
        listPrice: ['', Validators.required],
        imgSrc:['', Validators.required]  
      })
  }
  get form() {
    return this.registerForm.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
    return;
    else{
      console.log(this.product)
      this.service.editProduct(this.product,String(this.id)).subscribe(x=>console.log(x));
      this.router.navigate(['list']);
    }
  }
}
