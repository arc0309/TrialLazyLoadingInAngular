import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user/users/user';

@Injectable()
export class UsersService {
    url: string = 'https://jsonplaceholder.typicode.com/users';
    constructor(private http: HttpClient){
    }
    getUsers(): Observable<any> {
        return this.http.get(this.url);
    }
    postUsers(newuser: User): Observable<any> {
        return this.http.post(this.url, {user: newuser});
    }
}