import { BrandsService } from './../../services/brands.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Brand } from './../../models/BrandModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder, private brandService:BrandsService) { }
  brand:Brand;
  brandForm:FormGroup;

  ngOnInit(): void {
    this.brandGetById()
  }
  brandGetById(){
    // console.log("1");
    this.activatedRoute.params.subscribe((params)=>{
      this.getBrands(params['id'])
    })
  }
  getBrands(id){
    this.brandService.brandGetById(id).subscribe((data)=>{
      this.brand=data
      this.updateBrandForm()
    })
    // console.log("2");
  }

  updateBrandForm(){
    this.brandForm=this.formBuilder.group({
      name:[this.brand.name,[Validators.required]]
    })
    // console.log("3");
    // console.log(this.brand.name);
  }
  update(){
    this.brandService.update(this.activatedRoute.snapshot.params["id"],this.brandForm.value).subscribe((response)=>{
    })
  }
 
}
