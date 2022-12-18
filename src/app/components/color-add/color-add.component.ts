import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ColorsService } from "./../../services/colors.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-color-add",
  templateUrl: "./color-add.component.html",
  styleUrls: ["./color-add.component.css"],
})
export class ColorAddComponent implements OnInit {
  colorAddForm: FormGroup;
  constructor(
    private colorsService: ColorsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
    });
  }

  add() {
    this.colorsService.add(this.colorAddForm.value).subscribe((data) => {
      console.log(this.colorAddForm.value);
    });
  }
}
