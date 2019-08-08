import {Component, OnInit} from '@angular/core';
import {IUser} from '../../model/user';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: IUser[];
  loginUser: IUser;

  constructor(private userService: UserService, private router: Router) {
    this.userList = userService.userList;
    this.loginUser = userService.loginUser;
  }

  logoutUser() {
    console.log('log out user');
  }

  searchUsers(username: string) {
    console.log(username);
    this.userList = this.userService.searchUser(username);
  }

  ngOnInit() {
  }

}
