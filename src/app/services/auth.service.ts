import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usr:string=''
  vrfy:boolean=false

  constructor(private fireauth: AngularFireAuth) { }

  forgotPass(email:string){
    // if()
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
      alert('email link has been sent')
    },
    err=>{
      alert('given email is not registered with wedding tambu')
    })
    
  }
    
  getCurrentUser(){  
    return this.usr;
  }
  getVerified(){
    return this.vrfy;
  }

  login(email:any,password:any){
    this.fireauth.signInWithEmailAndPassword(email,password).then((user)=>{
      this.fireauth.onAuthStateChanged(user => {
        if (user) {
          this.usr=user.uid;
          console.log(user,this.usr,user.emailVerified,'aaaaaaaaaa')
          
          // this.vrfy = user.emailVerified
          // if(!this.vrfy){
          //   user.sendEmailVerification()
          //     .then(function() {
          //       alert('You need to verify email and the try logging in, verification email has been sent')
          //     })
          //     .catch(function(error) {
          //       alert('Error occurred while sending email, try again')
          //     });
          // }else{
            localStorage.setItem('token','item');
            alert('login successful')
          // }
          }
      });
     
    },
    err=>{
      alert('Email or password is incorrect')
    }
    )
  }

  register(email:any,password:any){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('registration successful')
      console.log('registration successful')
    },
    err=>{
      alert('something went wrong')
    }
    )
  }



 signout(){
  this.fireauth.signOut().then(()=>{
    localStorage.removeItem('token')
    this.usr = ''
    this.vrfy = false
  },err=>{
    alert('error while logout')
  })
 }
}
