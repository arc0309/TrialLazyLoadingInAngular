import { UsersService } from './../../shared/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User>;
  isNewUser: boolean = false;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  showNewUserForm(): void {
    this.isNewUser = true;
  }

  deleteUser(id: number): void {
    console.log(id);
    this.users = this.users.filter(ele => ele.id != id );
  }

}
