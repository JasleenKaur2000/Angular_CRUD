import { Component } from '@angular/core';
import { IUserModel } from '../models/user.model';
import { GetUsersDataService } from '../service/get-users-data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.scss'],
})
export class DisplayUserComponent {
  users!: IUserModel[];

  constructor(private usersData: GetUsersDataService, private router: Router) {
    this.GetAllUsers();
  }

  GetAllUsers() {
    this.usersData.getUsers().subscribe((result) => {
      if (result.response == 1) {
        console.warn(result.message);
        this.users = result.data;
      } else {
        alert('ERROR OCCURED');
      }
    });
  }

  AddUser() {
    this.router.navigate(['edituser']);
  }
  ViewUser(id: any) {
    this.router.navigate(['viewuser', { id }]);
  }
  EditUser(id: any) {
    this.router.navigate(['edituser', { id }]);
  }

  DeleteUser(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersData.deleteUser(id).subscribe((result) => {
          if (result.response == 1) {
            Swal.fire({
              icon: 'success',
              title: 'SUCCESS',
              text: result.message,
            })
            this.GetAllUsers();
          } else {
            alert('ERROR OCCURED');
          }
        });  
      }
    });
  }
}
