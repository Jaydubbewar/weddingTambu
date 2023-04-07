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


  path: string = ""

  database: string = ""
  Dimage: string[] = [];
  Dpackage: any[] = [];
  pname: string = ""
  pval: string = ""

  ur: string = ''
  urr: string = ''
  constructor(private router: Router, private data: WeddtambuService, private af: AngularFireStorage, private auth: AuthService) {
    this.ur = this.auth.getCurrentUser();

    if (this.ur == '') {
      this.router.navigate(['/log-signup']);
    }
  }

  
  // DATA METHODS  //

  package() {
    this.Dpackage.push({ Pname: this.pname, Pvalue: this.pval })
    this.pname = ''
    this.pval = ''
  }

  async registerSubmited() {
    this.urr = await this.data.checkUser(this.ur);

    if (this.urr == '') {
      console.log(this.registerForm.value);
      this.registerForm.value.uid = this.ur
      const DataVenue = this.registerForm.value.btype!;
      this.data.addData(DataVenue, this.registerForm.value)    // ADD DATA TO SPECIFIC VENDOR
      this.data.addData('user', { email: this.registerForm.value.firstname, vendor: DataVenue, UID: this.auth.getCurrentUser() })
                                                                  // ADD DATA TO USER DATABASE
                                                                  
      alert('Successfully vendor is registered ')
    }
    else {
      alert('already a registered vendor ')
    }
  }


  async upload($event: any) {           // FOR IMAGE UPLOAD

    this.path = $event.target.files[0]

    let aa = "/files" + Math.random() + this.path
    await this.af.upload(aa, this.path)
    console.log(aa)
    await this.af.ref(aa).getDownloadURL().subscribe((url) => {
      this.Dimage.push(url)
    })
    alert("Image uploaded successfully")
  }
                                                    //FORM AND VARIABLES
   Bustype: string = ''

  registerForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    bname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),]),
    price: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    about: new FormControl('', [Validators.required]),
    uid: new FormControl(''),
    policy: new FormControl('', [Validators.required]),
    // pwd: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(6),
    //   Validators.maxLength(10),]),
    btype: new FormControl('', [Validators.required]),

    area: new FormControl(''),    // Venue variables
    location: new FormControl(''),
    rooms: new FormControl(''),
    parking: new FormControl(''),
    cater: new FormControl(''),
    decor: new FormControl(''),
    capacity: new FormControl(''),

    tambuexperience: new FormControl(''),  //Tambu
    music: new FormControl(''),
    stage: new FormControl(''),

    plate: new FormControl(''),   //catering
    services: new FormControl(''),

    photoexperience: new FormControl(''),  //photographer
    delivery: new FormControl(''),

    type: new FormControl(''),    //enterainment
    experience: new FormControl(''),

    artist: new FormControl(''),    //other vendors
    artexperience: new FormControl(''), 
    
  });

  get FirstName(): FormControl {
    return this.registerForm.get('firstname') as FormControl;
  }

  get LastName(): FormControl {
    return this.registerForm.get('lastname') as FormControl;
  }

  get Price(): FormControl {
    return this.registerForm.get('price') as FormControl;
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

  get Policy(): FormControl {
    return this.registerForm.get('policy') as FormControl;
  }
  get UID(): FormControl {
    return this.registerForm.get('uid') as FormControl;
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
  get Parking(): FormControl {
    return this.registerForm.get('parking') as FormControl;
  }
  get Cater(): FormControl {
    return this.registerForm.get('cater') as FormControl;
  }

  get Decor(): FormControl {
    return this.registerForm.get('decor') as FormControl;
  }

  get Capacity(): FormControl {
    return this.registerForm.get('capacity') as FormControl;
  }

  get TambuExperience(): FormControl {
    return this.registerForm.get('tambuexperience') as FormControl;
  }

  get Music(): FormControl {
    return this.registerForm.get('music') as FormControl;
  }

  get Stage(): FormControl {
    return this.registerForm.get('stage') as FormControl;
  }

  get Plate(): FormControl {
    return this.registerForm.get('plate') as FormControl;
  }

  get Services(): FormControl {
    return this.registerForm.get('services') as FormControl;
  }

  get PhotoExperience(): FormControl {
    return this.registerForm.get('photoexperience') as FormControl;
  }
  get Delivery(): FormControl {
    return this.registerForm.get('delivery') as FormControl;
  }
  
  get Type(): FormControl {
    return this.registerForm.get('type') as FormControl;
  }
  
  get Experience(): FormControl {
    return this.registerForm.get('experience') as FormControl;
  }
  
  get Artist(): FormControl {
    return this.registerForm.get('artist') as FormControl;
  }
  
  get Artexperience(): FormControl {
    return this.registerForm.get('artexperience') as FormControl;
  }
  
  


}
