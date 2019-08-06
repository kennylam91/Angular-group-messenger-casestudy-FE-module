import {Component, OnInit} from '@angular/core';
import {IUser} from '../../model/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: IUser[];

  constructor(private userService: UserService) {
    this.userList = userService.userList;
  }

  ngOnInit() {
  }

}
