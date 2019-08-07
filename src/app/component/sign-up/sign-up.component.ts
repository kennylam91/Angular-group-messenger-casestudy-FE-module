import { Component, OnInit } from '@angular/core';
import {IUser} from '../../model/user';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser: IUser;
  userRegisterForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    this.newUser = {
      username: this.userRegisterForm.controls.username.value,
      password: this.userRegisterForm.controls.password.value,
      status: 'offline',
    };
    this.userService.addtoUserList(this.newUser);
    console.log(this.userService.userList);
    this.router.navigateByUrl('login');
  }

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }
}
