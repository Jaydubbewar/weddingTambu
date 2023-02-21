import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth) { }
    
  login(email:string,password:string){
    console.log('login service in')
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','item');
      alert('login successful')
      console.log('login successful')
    },
    err=>{
      alert('something went wrong with sign in')
    }
    )
  }

  register(email:string,password:string){
    console.log('register service in')
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('registration successful')
      console.log('registration successful')

    },
    err=>{
      alert('something went wrong with rgister')
    }
    )
  }

 signout(){
  this.fireauth.signOut().then(()=>{
    localStorage.removeItem('item')
  },err=>{
    alert('error while logout')
  })
 }
}
