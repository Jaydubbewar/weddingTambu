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
    this.fireauth.signInWithEmailAndPassword(email,password).then(res =>{
      
      this.fireauth.onAuthStateChanged(user => {
        if (user) {
          
          console.log(user,this.usr,user.emailVerified,'aaaaaaaaaa')
          
          this.vrfy = user.emailVerified
          if(!this.vrfy){
            user.sendEmailVerification()
              .then(function() {
                console.log('You need to verify email and the try logging in')
                alert('You need to verify email and the try logging in, verification email has been sent')
              })
              .catch(function(error) {
                alert('Error occurred while sending email, try again')
              });
          }else{
            this.usr=user.uid;
            localStorage.setItem('UID',user.uid);
            alert('login successful')
          }
          }
      });
     
    },
    err=>{
      alert('Email or password is incorrect')
    }
    )
  }

  register(email:any,password:any){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(res=>{
      alert('registration successful')
      
      res.user?.sendEmailVerification().then(()=>{
        alert('Email has been sent to registered email address, please verify and log in')
      },(err:any)=>{
        alert('Not able to send email to given address')
      })

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
    console.log('in sign out')
  },err=>{
    alert('error while logout')
  })
 }
}
