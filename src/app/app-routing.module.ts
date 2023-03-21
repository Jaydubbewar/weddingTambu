import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { HomeComponent } from './components/home/home.component';
import { LogSignupComponent } from './components/log-signup/log-signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TambuComponent } from './components/tambu/tambu.component';
import { VendorSignupComponent } from './components/vendor-signup/vendor-signup.component';
import { VenueComponent } from './components/venue/venue.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'log-signup', component:LogSignupComponent},
  {path:'app-dashboard', component:DashboardComponent},
  {path:'vendor-signup',component:VendorSignupComponent},
  {path:'forgot-pass',component:ForgotPassComponent},
  {path:'venue',component:VenueComponent},
  {path:'tambu',component:TambuComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
