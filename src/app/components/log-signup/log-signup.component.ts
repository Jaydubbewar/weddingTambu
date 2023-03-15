import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-signup',
  templateUrl: './log-signup.component.html',
  styleUrls: ['./log-signup.component.css']
})
export class LogSignupComponent {

  email:string = '';
  password:string = '';

  signemail:string = '';
  signpassword:string = '';

  constructor(private auth : AuthService){}

  login(){
    console.log('login in')
    
    this.auth.login(this.email,this.password);
    this.email=''
    this.password=''
    console.log('login successful',this.auth.getCurrentUser())
  }

  signin(){
    console.log('signin in',this.signemail,this.signpassword)
    
    this.auth.register(this.signemail,this.signpassword);
    this.signemail=''
    this.signpassword=''
    console.log('signin successful')
  }


}
