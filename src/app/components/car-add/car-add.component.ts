import { CarsService } from "./../../services/cars.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-car-add",
  templateUrl: "./car-add.component.html",
  styleUrls: ["./car-add.component.css"],
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private carsService: CarsService
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      carName: ["", [Validators.required, Validators.minLength(2)]],
      brandId: ["", [Validators.required]],
      carDetail: ["", [Validators.required, Validators.minLength(2)]],
      carDescription: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.minLength(2)]],
      plate: ["", [Validators.required, Validators.minLength(2)]],
      state: ["", [Validators.required, Validators.minLength(2)]],
      image: ["", [Validators.required, Validators.minLength(2)]],
    });
  }
  add() {
    this.carsService.add(this.carAddForm.value).subscribe((data) => {});
  }
}
