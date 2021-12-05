import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  user: User;
  user1: any;
  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
  };
  ngOnInit() {
    this.user1 = JSON.parse(window.localStorage.getItem("user"));
    this.Getuser(this.user1.userId);
  }
  Getuser(id) {
    console.log(id);
    this.userService.GetUser(id).subscribe({
      next: res => {
        (this.user = res)
        // console.log(res)
      }
    });
  }
}
