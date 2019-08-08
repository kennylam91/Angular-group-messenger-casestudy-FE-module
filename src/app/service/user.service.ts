import {Injectable} from '@angular/core';
import {IUser} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static STATUS_ONLINE = 'online';
  static STATUS_OFFLINE = 'offline';
  userList: IUser[] = [
    {username: 'admin', password: 'admin', status: 'online'},
    {username: 'admin1', password: 'admin1', status: 'online'},
    {username: 'admin2', password: 'admin2', status: 'online'},
    {username: 'admin3', password: 'admin3', status: 'offline'},
    {username: 'admin4', password: 'admin4', status: 'offline'},
    {username: 'admin5', password: 'admin5', status: 'offline'},
    {username: 'phamlam91', password: '1', status: 'offline'},
    {username: 'kennylam', password: '1', status: 'offline'},
    {username: 'kennylam2019', password: '1', status: 'offline'},
  ];
  loginUser: IUser = {
    username: 'admin',
    password: 'admin',
    status: 'online'
  }; // Test login user

  addtoUserList(user: IUser) {
    this.userList.push(user);
  }

  login(user: IUser): boolean {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.userList.length; i++) {
      if ((this.userList[i].username === user.username) && (this.userList[i].password === user.password)) {
        this.userList[i].status = UserService.STATUS_ONLINE;
        this.loginUser = this.userList[i];
        return true;
      }
    }
    return false;
  }

  searchUser(c: string): IUser[] {
    const users = this.userList;
    return users.filter(user => user.username.indexOf(c) !== -1);
  }

  constructor() {
  }
}
