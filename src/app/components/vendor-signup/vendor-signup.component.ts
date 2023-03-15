import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { WeddtambuService } from 'src/app/services/weddtambu.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vendor-signup',
  templateUrl: './vendor-signup.component.html',
  styleUrls: ['./vendor-signup.component.css']
})
export class VendorSignupComponent {

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
  path:string=""

  database:string=""
  Dimage : string[]= [];
  Dpackage : any[]= [];
  pname : string=""
  pval : string=""

  ur:string=''
  constructor(private router: Router,private data:WeddtambuService,private af:AngularFireStorage,private auth : AuthService){
    this.ur = this.auth.getCurrentUser();

    if (this.ur==''){
      this.router.navigate(['/log-signup']);
    }
  }
  Bustype:string=''

  registerForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    about: new FormControl('',[Validators.required]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),]),
    bname: new FormControl('',[Validators.required]),
    btype: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required]),
    rooms: new FormControl(''),
  });

  get FirstName(): FormControl {
    return this.registerForm.get('firstname') as FormControl;
  }

  get LastName(): FormControl {
    return this.registerForm.get('lastname') as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get City(): FormControl {
    return this.registerForm.get('city') as FormControl;
  }

  get Mobile(): FormControl {
    return this.registerForm.get('mobile') as FormControl;
  }

  get About(): FormControl {
    return this.registerForm.get('about') as FormControl;
  }

  get PWD(): FormControl {
    return this.registerForm.get('pwd') as FormControl;
  }

  get Bname(): FormControl {
    return this.registerForm.get('bname') as FormControl;
  }

  get Btype(): FormControl {
    return this.registerForm.get('btype') as FormControl;
  }
  get Area(): FormControl {
    return this.registerForm.get('area') as FormControl;
  }
  get Location(): FormControl {
    return this.registerForm.get('location') as FormControl;
  }

  get Rooms(): FormControl {
    return this.registerForm.get('rooms') as FormControl;
  }
  

  // DATA METHODS  //

  package(){
    this.Dpackage.push({Pname:this.pname,Pvalue:this.pval})
    this.pname=''
    this.pval=''
  }

  registerSubmited() {
    console.log(this.registerForm.value);
    const DataVenue = this.registerForm.value.btype!;
    this.data.addData(DataVenue,this.registerForm.value)

    this.data.addData('user',{email:this.registerForm.value.email,vendor:DataVenue,UID:this.auth.getCurrentUser()})
  }
 

  async upload($event:any){           // FOR IMAGE UPLOAD
    
    this.path=$event.target.files[0]

    let aa = "/files"+Math.random()+this.path
    await this.af.upload(aa,this.path)
    console.log(aa)
    await this.af.ref(aa).getDownloadURL().subscribe((url)=>{
      this.Dimage.push(url)
    })
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
}
