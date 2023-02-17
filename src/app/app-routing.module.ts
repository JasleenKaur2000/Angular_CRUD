import { ViewEncapsulation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [
  {
    component: DisplayUserComponent,
    path: 'getuser',
  },
  {
    component: EditUserComponent,
    path: 'edituser',
  },
  {
    component: ViewuserComponent,
    path: 'viewuser',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
