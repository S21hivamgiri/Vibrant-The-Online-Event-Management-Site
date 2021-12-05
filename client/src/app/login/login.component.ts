import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService, private userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
    this.authService.IsRemembered().subscribe((data: Boolean) => {
      if (data) {
        this.isSet = true;
        this.authService.GetUserDetails().subscribe((userData: User) => {
          this.user = userData;
        })
      }
    })
  }
  isSet = false
  Login(form: NgForm) {
    if (form.valid) {
      this.authService.Login(this.user).subscribe(res => {
        if (res.body.success == true) {
          const user = res.body.user;
          if (this.isSet) {
            localStorage.setItem("user", JSON.stringify(user));
          } else {
            localStorage.removeItem('user');
          }
          sessionStorage.setItem("user", JSON.stringify(user));
          if (user.roles.indexOf("Admin") > -1) {
            this.router.navigate(["/admin"]);
            this.authService.setCurentRole('Admin')
          }
          else if (user.roles.indexOf("User") > -1) {
            this.authService.setCurentRole('User');

            this.router.navigate(["/user"]);
          }
        }
      });
    }
  }
}
