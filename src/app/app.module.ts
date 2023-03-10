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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowDataComponent,
    LogSignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
