import {Injectable} from '@angular/core';
import {IUser} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: IUser[] = [
    {username: 'admin', password: 'admin'},
    {username: 'admin1', password: 'admin1'},
    {username: 'admin2', password: 'admin2'},
    {username: 'admin3', password: 'admin3'},
    {username: 'admin4', password: 'admin4'},
  ];

  addtoUserList(user: IUser) {
    this.userList.push(user);
  }

  checkUser(user: IUser): boolean {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.userList.length; i++) {
      if ((this.userList[i].username === user.username) && (this.userList[i].password === user.password)) {
        return true;
      }
    }
    return false;
  }

  constructor() {
  }
}
