import { FormBuilder, Validators } from "@angular/forms";
import { AutService } from "./../../services/aut.service";
import { TokenModel } from "./../../models/TokenModel";
import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginForm: FormGroup;
  tokenmodel: TokenModel;

  constructor(
    private autService: AutService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.createAddForm();
  }
  createAddForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  login() {
    this.autService.login(this.loginForm.value).subscribe((data) => {
      this.tokenmodel = data[0];
      localStorage.setItem("token", this.tokenmodel.token);
      this.router.navigate([""]);
    });
  }
}
