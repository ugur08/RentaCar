import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterService } from "src/app/services/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  registerAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm() {
    this.registerAddForm = this.formBuilder.group({
      email: ["", Validators.required],
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  add() {
    this.registerService
      .add(this.registerAddForm.value)
      .subscribe((data) => {});
  }
}
