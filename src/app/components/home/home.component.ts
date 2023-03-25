import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { WeddtambuService } from 'src/app/services/weddtambu.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private wedt:WeddtambuService,private auth:AuthService){
    this.ur = this.auth.getCurrentUser();
  }
  
  products: any;
  ur:any;

  // async gtt(){
  //    this.products = await this.wedt.getData('Catering');
  //  console.log(this.products)
  // }
  signout(){
    this.auth.signout();
    alert('sign out')
  }
}
