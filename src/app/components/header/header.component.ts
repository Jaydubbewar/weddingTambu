import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { AuthService } from 'src/app/services/auth.service';
import { WeddtambuService } from 'src/app/services/weddtambu.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
 faBars =faBars;
 faClose=faClose;

 
  // AUTH VARIABLES  //
  email:string = '';
  password:string = '';

  signemail:string = '';
  signpassword:string = '';
  //  -------------  //

  
  constructor(private auth : AuthService,private data:WeddtambuService,private af:AngularFireStorage){}

  //AUTH METHODS //
  login(){
    console.log('login in')
    
    this.auth.login(this.email,this.password);
    this.email=''
    this.password=''
    console.log('login successful')
  }

  signin(){
    console.log('signin in',this.signemail,this.signpassword)
   
    this.auth.register(this.signemail,this.signpassword);
    this.signemail=''
    this.signpassword=''
    console.log('signin successful')
  }

}
