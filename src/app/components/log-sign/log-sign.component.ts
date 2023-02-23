import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AuthService } from 'src/app/services/auth.service';
import { WeddtambuService } from 'src/app/services/weddtambu.service';
@Component({
  selector: 'app-log-sign',
  templateUrl: './log-sign.component.html',
  styleUrls: ['./log-sign.component.css']
})
export class LogSignComponent {

  // AUTH VARIABLES  //
  email:string = '';
  password:string = '';

  signemail:string = '';
  signpassword:string = '';
  //  -------------  //

  // DATA VARIABLES  //

  Dname:string = '';
  Dcontact:string = '';
  Darea:string = '';
  Dloc:string = '';
  DpriceRange:string = '';
  Dpolicy:string = '';
  Drooms:string = '';
  Dabout:string = '';
  Ddecorations:string = '';
  Dimage : string[]= [];
  path:string=""

  constructor(private auth : AuthService,private data:WeddtambuService,private af:AngularFireStorage){}

  // DATA METHODS  //

  Venue(){
    // this.Dimage.P
    const DataVenue = {name:this.Dname,contact: this.Dcontact,images:this.Dimage,area:this.Darea}
    console.log(DataVenue)
    this.data.addData('venue',DataVenue)
    alert('Data added successfully, you are heartly welcome to our family...')
    this.Dempty()
  }

  async upload($event:any){           // FOR IMAGE UPLOAD
    
    this.path=$event.target.files[0]

    let aa = "/files"+Math.random()+this.path
    await this.af.upload(aa,this.path)
    console.log(aa)
    await this.af.ref(aa).getDownloadURL().subscribe((url)=>{
      this.Dimage.push(url)})
    console.log(this.Dimage)
    alert("Image uploaded successfully")
  }

  Dempty(){
   this.Dname = '';
   this.Dcontact = '';
   this.Darea = '';
   this.Dloc = '';
   this.DpriceRange = '';
   this.Dpolicy = '';
   this.Drooms = '';
   this.Dabout = '';
   this.Ddecorations = '';
   this.Dimage = [];
   this.path = ""
  }

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

  // --------------- //


}
