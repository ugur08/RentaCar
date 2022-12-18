import { ActivatedRoute } from '@angular/router';
import { CardetailService } from './../../services/cardetail/cardetail.service';
import { CarModel } from './../../models/CarModel';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  cardetails:CarModel[] = []
  constructor(private cardetailservice:CardetailService, private activated:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.activated.params.subscribe(params=>{
      this.getCarDetails(params["id"])
    })
  }

  getCarDetails(id){
    this.cardetailservice.getCarDetail(id).subscribe(data=>{
      this.cardetails=data
    })
  }
  save():void{
    this.cardetailservice.update(this.cardetails).subscribe(()=>{
      this.location.back()
    })
  }

}
