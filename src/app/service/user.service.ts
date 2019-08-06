import {Injectable} from '@angular/core';
import {IUser} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: IUser[] = [
    {username: 'admin', password: 'admin'}];

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
