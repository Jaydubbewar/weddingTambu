import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usr:string=''

  constructor(private fireauth: AngularFireAuth) { }
    
  getCurrentUser(){  
    return this.usr 
  }


  login(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then((user)=>{
      this.fireauth.onAuthStateChanged(user => {
        if (user) {
        this.usr=user.uid;
        }
      });
      // this.user = this.fireauth.authState;
      localStorage.setItem('token','item');
      alert('login successful')
    },
    err=>{
      alert('something went wrong with sign in')
    }
    )
  }

  register(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('registration successful')
      console.log('registration successful')

    },
    err=>{
      alert('something went wrong with register')
    }
    )
  }



 signout(){
  this.fireauth.signOut().then(()=>{
    localStorage.removeItem('item')
    this.usr = ''
    alert('signout')
  },err=>{
    alert('error while logout')
  })
 }
}
