import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserdataService } from '../../service/userdata.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(private productData: UserdataService) {}

  registerProduct(data: any) {
    console.warn(data);
    this.productData.saveProducts(data).subscribe((result) => {
      console.warn(result);
    });
  }

  productForm = new FormGroup({
    product: new FormControl('', [Validators.required]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    units: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.maxLength(5),
    ]),
  });

  get product() {
    return this.productForm.get('product');
  }
  get price() {
    return this.productForm.get('price');
  }
  get units() {
    return this.productForm.get('units');
  }
}
