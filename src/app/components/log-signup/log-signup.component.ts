import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-log-signup',
  templateUrl: './log-signup.component.html',
  styleUrls: ['./log-signup.component.css']
})
export class LogSignupComponent {

  showLogin:boolean=false;   //tushar

  constructor(private auth : AuthService){}

  signupForm = new FormGroup({
    username:new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),]),
  })

  openLogin(){
this.showLogin=true;
  }
  
  openSignup(){
    this.showLogin=false;
  }

  loginForm = new FormGroup({
    Lemail: new FormControl('', [Validators.required, Validators.email]),
    Lpwd: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),]),
  })

  get Username(): FormControl{
    return this.signupForm.get('username') as FormControl;
  }

  get Email(): FormControl {
    return this.signupForm.get('email') as FormControl;
  }

  get PWD(): FormControl {
    return this.signupForm.get('pwd') as FormControl;
  }
  get LEmail(): FormControl {
    return this.loginForm.get('Lemail') as FormControl;
  }

  get LPWD(): FormControl {
    return this.loginForm.get('Lpwd') as FormControl;
  }
//jay
  login(){
    console.log(this.loginForm.value.Lemail,this.loginForm.value.Lpwd)
    
    this.auth.login(this.loginForm.value.Lemail,this.loginForm.value.Lpwd);
    console.log('login successful',this.auth.getCurrentUser())
  }

  signin(){
    console.log('signin in',this.signupForm.value.email,this.signupForm.value.pwd)
    
    this.auth.register(this.signupForm.value.email,this.signupForm.value.pwd);
    console.log('signin successful')
  }


}
