import { Component } from '@angular/core';
import { UserdataService } from '../../service/userdata.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent {
  prods: any;
  constructor(private productData: UserdataService) {
    this.productData.productsFromApi().subscribe((data) => {
      this.prods = data;
    });
  }
}
