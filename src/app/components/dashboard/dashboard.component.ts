import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { WeddtambuService } from 'src/app/services/weddtambu.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

 ur:any;
 usrData:any;
  constructor(private auth: AuthService, private wedt: WeddtambuService){ 
    this.ur = this.auth.getCurrentUser();
    this.ok()
  }

  async ok(){
    const usr = await this.wedt.getUser(this.ur);
    console.log(usr[0]?.email,usr[0]?.vendor)
    this.usrData = await this.wedt.getData(usr[0]?.vendor,'email',usr[0]?.email)
    console.log(this.usrData)
  }

 
}
