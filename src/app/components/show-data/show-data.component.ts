import { Component } from '@angular/core';
import { WeddtambuService } from 'src/app/services/weddtambu.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent {

  constructor(private service:WeddtambuService) { }

  products: any;

  ngOnInit(): void {

    this.getProduct('venue');
  }  

  async getProduct(sub:any) {
    this.products = await this.service.getData(sub);
    console.log(this.products); 
  }
}
