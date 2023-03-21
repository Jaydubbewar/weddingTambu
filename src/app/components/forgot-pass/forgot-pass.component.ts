import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent {
  signemail:string='';

  constructor(private auth : AuthService){}

  signin(){
    this.auth.forgotPass(this.signemail)
  }
}
