import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { WeddtambuService } from 'src/app/services/weddtambu.service';

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
  Dimage : string[]= [];
  path:string=""

  database:string=""
  selectedTeam:string='';  

  constructor(private data:WeddtambuService,private af:AngularFireStorage){}

  // DATA METHODS  //

  Venue(){
    // this.Dimage.P
    const DataVenue = {name:this.Dname,contact: this.Dcontact,images:this.Dimage,area:this.Darea}
    console.log(DataVenue)
    this.data.addData(this.database,DataVenue)
    alert('Data added successfully, you are heartly welcome to our family...')
    this.Dempty()
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
