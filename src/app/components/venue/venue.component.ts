import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { WeddtambuService } from 'src/app/services/weddtambu.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent {

  constructor(private wedt:WeddtambuService,private auth:AuthService){
    this.ur = this.auth.getCurrentUser();
    this.gtt()
  }
  
  products: any;
  ur:any;

  async gtt(){
     this.products = await this.wedt.getVendors('Venue');
   console.log(this.products)
  }
}

