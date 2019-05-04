import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import { User } from './user';

@Component({
    selector: 'newuser',
    template: `
        <div *ngIf="newUser">
        <div>Fill out below form to add users to the list</div>
            <form #userform="ngForm" (ngSubmit)="addUser(userform.value); userform.reset()">
                Name: <input type="text" name="name" ngModel/><br/>
                Username: <input type="text" name="username" ngModel/><br/>
                Email: <input type="email" name="email" ngModel/><br/>
                Phone: <input type="text" name="phone" ngModel/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    `,
    styles: [``]
})
export class NewUserComponent implements OnInit {
    @Input() newUser: boolean = false;
    @Input('users') userList: Array<User>
    constructor(private userService: UsersService) { }

    ngOnInit(): void { }

    addUser(newUser) {
        this.userService.postUsers(newUser).subscribe(response => {
            let user = response.user;
            this.userList.push(new User(response.id, user.name, user.username, user.email, user.phone));
            // this.newUser = false;
        });
    }
}
