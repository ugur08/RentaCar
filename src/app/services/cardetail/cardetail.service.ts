import { CarModel } from './../../models/CarModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl= "http://localhost:3000/cars";

  constructor(private httpClient:HttpClient) { }

  getCarDetail(id){
    return this.httpClient.get<CarModel[]>(this.apiUrl +  "?id=" + id)
  }
  update(cars:CarModel[]):Observable<any>{
    return this.httpClient.put(this.apiUrl +  "?id=" , cars)
  }


}
