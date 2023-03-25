import { Component } from '@angular/core';
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { WeddtambuService } from 'src/app/services/weddtambu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  faBars = faBars;
  faClose = faClose;

  ur: any;
  urr: any;
  boll = false;
  constructor(private auth: AuthService, private wedt: WeddtambuService, private router: Router) { }

  ngOnInit(): void{
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        console.log(val.url)
        this.ur = this.auth.getCurrentUser();
        if (this.ur != '') {
          this.boll = true 
        }else{
          this.boll = false
        }
      }
    })
  }

  async check() {
    this.ur = this.auth.getCurrentUser();
    if (this.ur == '') {
      this.router.navigate(['/log-signup']);
    }
    else {
      this.urr = await this.wedt.getUser(this.ur);
      if (this.urr == '') {
        this.router.navigate(['/vendor-signup']);
      }
      else{
        this.router.navigate(['/app-dashboard']);
      }
    }
  }

  signout(){
    this.auth.signout();
    alert('sign out')
  }
}
