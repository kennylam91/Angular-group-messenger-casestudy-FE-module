import {Component, OnInit} from '@angular/core';
import {IUser} from '../../model/user';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser: IUser;
  userRegisterForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  onSubmit() {
    this.newUser = {
      username: this.userRegisterForm.value.username,
      password: this.userRegisterForm.value.password,
      status: 'offline',
    };
    this.userService.getUsers()
      .subscribe(next => {
        this.userService.userList = next;
        this.userService.createUser(this.newUser)
          .subscribe(next2 => {
            this.userService.userList.push(this.newUser);
            console.log(this.userService.userList);
            this.router.navigateByUrl('login');
          });
      });


  }

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }
}
