import { CarsService } from './../../services/cars.service';
import { Brand } from '../../models/BrandModel';
import { Observable } from 'rxjs';
import { BrandsService } from './../../services/brands.service';
import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/models/CarModel';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  currentBrand:Brand
  currentCar:CarModel
  brands:Brand[]=[]
  brandsName:string
  filterTextt:string
  constructor(private brandService:BrandsService, private carsService:CarsService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(data=>{
      this.brands=data
    })
  }
  selectBrands(data:any){
    this.brandsName=data
  }
  delete(brands:Brand):void{
    if(confirm("Silmek istediğinize emin misiniz?")){
      this.brands = this.brands.filter(b => b !== brands)
      this.brandService.delete(brands).subscribe()
    }
  }
  selectBrand(brandSelect){
    this.currentBrand = brandSelect;
    this.carsService.setSelectedBrand(brandSelect)
  }

}
