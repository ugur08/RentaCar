import { ActivatedRoute } from "@angular/router";
import { ColorModel } from "./../models/ColorModel";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ColorsService {
  apiUrl = "http://localhost:3000/colors";
  constructor(
    private httpClient: HttpClient,
    private activeRoute: ActivatedRoute
  ) {}

  getColors(): Observable<ColorModel[]> {
    return this.httpClient.get<ColorModel[]>(this.apiUrl);
  }
  delete(colors) {
    return this.httpClient.delete(this.apiUrl + "/" + colors.id);
  }
  add(value: any) {
    return this.httpClient.post(this.apiUrl, value);
  }
}
