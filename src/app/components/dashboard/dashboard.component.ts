import { Component } from '@angular/core';
import { WeddtambuService } from 'src/app/services/weddtambu.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  addProductMessage:string|undefined;


  constructor(private router: Router, private wedt: WeddtambuService, private af: AngularFireStorage, private auth: AuthService) {}
  
  ur:any=''
  VendorData:any

  ngOnInit(): void{
    this.ur = this.auth.getCurrentUser();
    if (this.ur != '') {
      this.wedt.getUser(this.ur).then(data => {
        this.VendorData=data[0]
        console.log('User data:', data[0]);
        console.log('User data:', this.VendorData.btype);
        this.Bustype = this.VendorData.btype
        this.busniessFrom.setValue({
          busName:this.VendorData.bname,
          description:this.VendorData.about,
          firstname: this.VendorData.firstname,
          lastname: this.VendorData.lastname,
          bname: this.VendorData.bname,
          price: this.VendorData.price,
          city: this.VendorData.city,
          mobile:this.VendorData.mobile,
          about:this.VendorData.about,
          uid:this.VendorData.uid,
          policy:this.VendorData.policy,
          btype:this.VendorData.btype,
      
          area:this.VendorData.area,  // Venue variables
          location:this.VendorData.location,
          rooms: this.VendorData.rooms,
          parking:this.VendorData.parking,
          cater: this.VendorData.cater,
          decor:this.VendorData.decor,
          capacity:this.VendorData.capacity,
      
          tambuexperience: this.VendorData.tambuexperience,  //Tambu
          music: this.VendorData.music,
          stage: this.VendorData.stage,
      
          plate: this.VendorData.plate, //catering
          services: this.VendorData.services,
      
          photoexperience:this.VendorData.photoexperience,   //photographer
          delivery:this.VendorData.delivery,
      
          type:  this.VendorData.type, //enterainment
          experience:this.VendorData.experience,
      
          artist:  this.VendorData.artist, //other vendors
          artexperience: this.VendorData.artexperience,
        });
      });
    }
   
  }
  submit(){
    console.log('In submit')
    const dta = {
      area: this.busniessFrom.value.busName,
      about: this.busniessFrom.value.description
    };

    this.wedt.update(dta)
  }

  Bustype: string = 'Vendors'

  
  
  busniessFrom= new FormGroup({

    busName: new FormControl(''),
    description: new FormControl(''),
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
    
  })


  
  get FirstName(): FormControl {
    return this.busniessFrom.get('firstname') as FormControl;
  }

  get LastName(): FormControl {
    return this.busniessFrom.get('lastname') as FormControl;
  }

  get Price(): FormControl {
    return this.busniessFrom.get('price') as FormControl;
  }

  get City(): FormControl {
    return this.busniessFrom.get('city') as FormControl;
  }

  get Mobile(): FormControl {
    return this.busniessFrom.get('mobile') as FormControl;
  }

  get About(): FormControl {
    return this.busniessFrom.get('about') as FormControl;
  }

  get Policy(): FormControl {
    return this.busniessFrom.get('policy') as FormControl;
  }
  get UID(): FormControl {
    return this.busniessFrom.get('uid') as FormControl;
  }

  get Bname(): FormControl {
    return this.busniessFrom.get('bname') as FormControl;
  }

  get Btype(): FormControl {
    return this.busniessFrom.get('btype') as FormControl;
  }
  get Area(): FormControl {
    return this.busniessFrom.get('area') as FormControl;
  }
  get Location(): FormControl {
    return this.busniessFrom.get('location') as FormControl;
  }
  get Rooms(): FormControl {
    return this.busniessFrom.get('rooms') as FormControl;
  }
  get Parking(): FormControl {
    return this.busniessFrom.get('parking') as FormControl;
  }
  get Cater(): FormControl {
    return this.busniessFrom.get('cater') as FormControl;
  }

  get Decor(): FormControl {
    return this.busniessFrom.get('decor') as FormControl;
  }

  get Capacity(): FormControl {
    return this.busniessFrom.get('capacity') as FormControl;
  }

  get TambuExperience(): FormControl {
    return this.busniessFrom.get('tambuexperience') as FormControl;
  }

  get Music(): FormControl {
    return this.busniessFrom.get('music') as FormControl;
  }

  get Stage(): FormControl {
    return this.busniessFrom.get('stage') as FormControl;
  }

  get Plate(): FormControl {
    return this.busniessFrom.get('plate') as FormControl;
  }

  get Services(): FormControl {
    return this.busniessFrom.get('services') as FormControl;
  }

  get PhotoExperience(): FormControl {
    return this.busniessFrom.get('photoexperience') as FormControl;
  }
  get Delivery(): FormControl {
    return this.busniessFrom.get('delivery') as FormControl;
  }
  
  get Type(): FormControl {
    return this.busniessFrom.get('type') as FormControl;
  }
  
  get Experience(): FormControl {
    return this.busniessFrom.get('experience') as FormControl;
  }
  
  get Artist(): FormControl {
    return this.busniessFrom.get('artist') as FormControl;
  }
  
  get Artexperience(): FormControl {
    return this.busniessFrom.get('artexperience') as FormControl;
  }
  
  



}

