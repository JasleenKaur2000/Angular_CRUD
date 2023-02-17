import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IUserModel } from '../models/user.model';
import { GetUsersDataService } from '../service/get-users-data.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})

export class EditUserComponent implements OnInit {
  userId: any;
  userDetail: any=[];
  editUsersForm: usersForm = new usersForm();

  @ViewChild("usersForm")
  usersForm!: NgForm;

  isSubmitted: boolean = false; //my error solved: figure out its usage

  constructor(private usersData: GetUsersDataService,private route: ActivatedRoute, private router: Router){
    
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.getUserById();
  }

  getUserById(){
    if(this.userId){
      this.usersData.getUserById(this.userId).subscribe((result)=>{
        if(result.response==1){
          this.userDetail=result.data;
          console.warn(this.userDetail)
          this.editUsersForm.Id=this.userDetail.id;
          this.editUsersForm.Name=this.userDetail.name;
          this.editUsersForm.Email=this.userDetail.email;
          this.editUsersForm.Mobile=this.userDetail.mobile;
        }else{
          alert('ERROR OCCURED');
        }
      })
    }else{
      this.editUsersForm.Id=0;
      this.editUsersForm.Name="";
      this.editUsersForm.Email="";
      this.editUsersForm.Mobile="";
    }
  }

  updateUser(value:IUserModel){
    let data = {
      id:value.id,
      name: value.name,
      email: value.email,
      mobile: value.mobile,
    }
    if(!data.id){
      this.usersData.saveUsers(data).subscribe(response => {
        if(response.response==1){
          Swal.fire({
            icon: 'success',
            title: 'SUCCESS',
            text: response.message,
          })
          this.router.navigate(['getuser']);
        }else{
          alert(response.message)
        }
      })
    }else{
      this.usersData.updateUser(data).subscribe(response => {
        if(response.response==1){
          Swal.fire({
            icon: 'success',
            title: 'SUCCESS',
            text: response.message,
          })
          this.router.navigate(['getuser']);
        }else{
          alert(response.message)
        }
      })
    }
    
  }

}

export class usersForm {
  Id: number =0;
  Name: string = "";
  Email: string = "";
  Mobile: string = "";
}