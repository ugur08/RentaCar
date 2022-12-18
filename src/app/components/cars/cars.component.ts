import { ToastrService } from "ngx-toastr";

import { HttpClient } from "@angular/common/http";
import { ColorModel } from "./../../models/ColorModel";
import { ColorsService } from "./../../services/colors.service";
import { BrandsService } from "./../../services/brands.service";
import { Brand } from "./../../models/BrandModel";
import { CarsService } from "./../../services/cars.service";
import { CarModel } from "./../../models/CarModel";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-cars",
  templateUrl: "./cars.component.html",
  styleUrls: ["./cars.component.css"],
})
export class CarsComponent implements OnInit {
  currentCar: CarModel;
  cars: CarModel[] = [];
  cardetail: string;
  filterText: string;
  colors: ColorModel[] = [];
  method: CarsService;
  colorFilter: number = 0;
  brandFilter: number = 0;
  brands: Brand[] = [];
  constructor(
    private carsService: CarsService,
    private brandService: BrandsService,
    private activatedRoute: ActivatedRoute,
    private colorsService: ColorsService,
    private brandsService: BrandsService,
    private httpClient: HttpClient,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCars();
    });

    this.colorsService.getColors().subscribe((data) => {
      this.colors = data;
    });
    this.getBrands();
    this.activatedRoute.params.subscribe((params) => {
      if (params["colorId"] && params["brandId"]) {
        this.getByBrandAndColor(params["brandId"], params["colorId"]);
      } else if (params["brandid"]) {
        this.getCarsBrandId(params["brandid"]);
      } else if (params["colorid"]) {
        this.getCarsByColorId(params["colorid"]);
      } else {
        this.getCars();
      }
    });
  }
  getByBrandAndColor(brandId: number, colorId: number) {
    this.carsService.getByBrandAndColor(brandId, colorId).subscribe((data) => {
      this.cars = data;
      if (this.cars.length == 0) {
        alert(" Aradığınız Kriterlerde Araç Mevcut Değildir");
      }
    });
  }
  getCarsBrandId(brandid) {
    this.carsService.getCarsByBrandId(brandid).subscribe((data) => {
      this.cars = data;
    });
  }
  getCarsByColorId(colorid: number) {
    this.carsService.getCarsColorId(colorid).subscribe((data) => {
      this.cars = data;
    });
  }
  getBrands() {
    this.brandService.getBrands().subscribe((data) => {
      this.brands = data;
    });
  }
  getCars() {
    this.carsService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }
  getByCategoryId(brandid: number, state: number) {
    this.carsService.getByCategoryId(brandid, state).subscribe((data) => {
      this.cars = data;
    });
  }
  getByColorId(id) {
    this.carsService.getByColorId(id).subscribe((data) => {
      this.cars = data;
    });
  }
  getBrandId(id) {
    this.carsService.getBrandId(id).subscribe((data) => {
      this.cars = data;
    });
  }
  selectCarDetail(dataa: any) {
    this.cardetail = dataa;
  }
  delete(cars: CarModel): void {
    if (confirm("Silmek istediğinize emin misiniz?")) {
      this.cars = this.cars.filter((c) => c !== cars);
      this.carsService.delete(cars).subscribe();
    }
  }
  selectedColor(colorId: number) {
    if (this.colorFilter == colorId) {
      console.log(colorId);

      return true;
    } else {
      return false;
    }
  }

  selectedBrand(brandId: number) {
    if (this.brandFilter == brandId) {
      return true;
    } else {
      return false;
    }
  }
}
