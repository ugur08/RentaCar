import { RegisterComponent } from "./components/register/register.component";
import { LoginGuard } from "./guards/login.guard";
import { LoginComponent } from "./components/login/login.component";
import { ColorAddComponent } from "./components/color-add/color-add.component";
import { ColorsComponent } from "./components/colors/colors.component";
import { BrandUpdateComponent } from "./components/brand-update/brand-update.component";
import { CarUpdateComponent } from "./components/car-update/car-update.component";
import { CarAddComponent } from "./components/car-add/car-add.component";
import { CardetailComponent } from "./components/cardetail/cardetail.component";
import { CarsComponent } from "./components/cars/cars.component";
import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrandAddComponent } from "./components/brand-add/brand-add.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: CarsComponent },
  { path: "cars", component: CarsComponent },
  { path: "brand/:brand/state/:state", component: CarsComponent },
  { path: "brand/:id", component: CarsComponent },
  { path: "cardetail/:id", component: CardetailComponent },
  {
    path: "brand-add",
    component: BrandAddComponent,
    canActivate: [LoginGuard],
  },
  { path: "car-add", component: CarAddComponent, canActivate: [LoginGuard] },
  {
    path: "car-update/:id",
    component: CarUpdateComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "brand-update/:id",
    component: BrandUpdateComponent,
    canActivate: [LoginGuard],
  },
  {
    path: "brand-update",
    component: BrandUpdateComponent,
    canActivate: [LoginGuard],
  },
  { path: "color/:colorId", component: CarsComponent },
  {
    path: "color-add",
    component: ColorAddComponent,
    canActivate: [LoginGuard],
  },
  { path: "cars/brand/:colorId", component: CarsComponent },
  { path: "brands/:brandId/color/:colorId", component: CarsComponent },
  { path: "filter/:brandId/:colorId", component: CarsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
