import { Component } from '@angular/core';
import { GetUsersDataService } from '../service/get-users-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUserModel } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-user',
  templateUrl: './enter-user.component.html',
  styleUrls: ['./enter-user.component.scss'],
})
export class EnterUserComponent {
  constructor(private usersData: GetUsersDataService, private router: Router) {}

  registerUser() {
    if (this.usersForm.valid) {
      var data = this.usersForm.value;
      this.usersData.saveUsers(data).subscribe((result) => {
        if (result.response == 1) {
          alert('SUCCESS');
          console.warn(result.data);
          console.warn(result.message);
          this.router.navigate(['getuser']);
        } else {
          alert('ERROR OCCURED');
        }
      });
    }
  }

  usersForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.maxLength(10),
    ]),
  });

  get name() {
    return this.usersForm.get('name');
  }
  get email() {
    return this.usersForm.get('email');
  }
  get mobile() {
    return this.usersForm.get('mobile');
  }
}
