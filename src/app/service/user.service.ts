import {Injectable} from '@angular/core';
import {IUser} from '../model/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static STATUS_ONLINE = 'online';
  static STATUS_OFFLINE = 'offline';
  private readonly API_URL = 'http://my-json-server.typicode.com/kennylam91/test_api_server/users';

  userList: IUser[];
  loginUser: IUser = {
    username: 'admin',
    password: 'admin',
    status: 'online'
  }; // Test login user

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.API_URL);
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.API_URL, user);
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

  constructor(private http: HttpClient) {
  }
}
