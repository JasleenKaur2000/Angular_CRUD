import { Component } from '@angular/core';
import { UserdataService } from '../../service/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  prods: any;
  constructor(private productData: UserdataService) {
    this.productData.productsFromApi().subscribe((data) => {
      this.prods = data;
    });
  }
}
