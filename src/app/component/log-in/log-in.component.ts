import {Component, OnInit} from '@angular/core';
import {IUser} from '../../model/user';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user: IUser;
  loginUserForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    this.user = {
      username: this.loginUserForm.controls.username.value,
      password: this.loginUserForm.controls.password.value,
      status: 'offline',
    };
    if (this.userService.checkUser(this.user)) {
      this.router.navigateByUrl('chat');
    }
  }

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

}
