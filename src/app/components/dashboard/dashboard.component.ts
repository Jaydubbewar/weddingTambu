import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  togle:string=''

  change(tog:string){
    this.togle=tog;
    console.log(this.togle)
  }
}
