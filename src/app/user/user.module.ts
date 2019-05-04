import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './users/newuser.component';

const routes: Routes = [
  {path: '', component: UsersComponent}
];
@NgModule({
  declarations: [UsersComponent, NewUserComponent],
  imports: [
    CommonModule, SharedModule, FormsModule, RouterModule.forChild(routes)
  ]
})
export class UserModule { }
