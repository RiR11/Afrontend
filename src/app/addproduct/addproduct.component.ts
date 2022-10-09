import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
//form declared
product: Product = new Product();
  registerForm!: FormGroup;
submitted: boolean = false;
//builder dependency injected through constructor
  constructor(private builder: FormBuilder, 
    private service: ProductService,private router:Router) { }

  ngOnInit(): void {

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
    this.service.addProduct(this.product).subscribe(x=>console.log(x));
    this.router.navigate(['list']);
  }
}
}
