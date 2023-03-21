import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import {AngularFireModule} from '@angular/fire/compat'
import { AngularFireStorageModule} from '@angular/fire/compat/storage'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { LogSignComponent } from './components/log-sign/log-sign.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogSignupComponent } from './components/log-signup/log-signup.component';
import { HomeComponent } from './components/home/home.component';
import { VendorSignupComponent } from './components/vendor-signup/vendor-signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VenueComponent } from './components/venue/venue.component';
import { TambuComponent } from './components/tambu/tambu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowDataComponent,
    LogSignComponent,
    LogSignupComponent,
    HomeComponent,
    VendorSignupComponent,
    DashboardComponent,
    ForgotPassComponent,
    PageNotFoundComponent,
    VenueComponent,
    TambuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
