import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    new User(1, 'Auhn K', 'ak', '1234'),
    new User(2, 'Jonh Smith', 'js', '1234'),
    new User(3, 'Mayank Kumar', 'mk', '1234'),
    new User(4, 'Tom Karan', 'tk', '1234'),
  ]
}
