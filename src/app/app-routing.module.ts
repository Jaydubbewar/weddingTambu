import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LogSignupComponent } from './components/log-signup/log-signup.component';
import { VendorSignupComponent } from './components/vendor-signup/vendor-signup.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'log-signup', component:LogSignupComponent},
  {path:'app-dashboard', component:DashboardComponent},
  {path:'vendor-signup',component:VendorSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
