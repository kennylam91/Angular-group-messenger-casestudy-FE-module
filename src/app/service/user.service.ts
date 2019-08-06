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

  constructor() {
  }
}
