import { Brand } from "./../models/BrandModel";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BrandsService {
  apiUrl = "http://localhost:3000/brands";

  constructor(private httpClient: HttpClient) {}

  brandGetById(id): Observable<Brand> {
    return this.httpClient.get<Brand>(this.apiUrl + "/" + id);
  }
  getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.apiUrl);
  }
  add(value: any) {
    return this.httpClient.post(this.apiUrl, value);
  }
  delete(brands) {
    return this.httpClient.delete(this.apiUrl + "/" + brands.id);
  }
  update(id, data: any) {
    return this.httpClient.put<Brand>(this.apiUrl + "/" + id, data);
  }
}
