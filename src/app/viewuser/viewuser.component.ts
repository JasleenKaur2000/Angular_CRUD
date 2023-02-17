import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUsersDataService } from '../service/get-users-data.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.scss'],
})
export class ViewuserComponent implements OnInit {
  userId: any;
  userDetail: any = [];

  constructor(
    private usersData: GetUsersDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.getUserById();
  }

  getUserById() {
    this.usersData.getUserById(this.userId).subscribe((result) => {
      if (result.response == 1) {
        this.userDetail = result.data;
        console.warn(result.message);
      } else {
        alert('ERROR OCCURED');
      }
    });
  }
}
