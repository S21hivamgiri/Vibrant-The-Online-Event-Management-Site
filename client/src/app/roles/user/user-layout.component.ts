import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styles: []
})
export class UserLayoutComponent implements OnInit {
  user: User;
  user1: any;
  login: any;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private authService: AuthService) {
    this.user = new User();
  };

  ngOnInit() {
    this.user1 = JSON.parse(window.localStorage.getItem("user"));
    this.Getuser(this.user1.userId);
    setTimeout(function () {
      document.getElementById("hide").style.display = "none";
    }, 3000);
  }

  Getuser(id) {
    this.userService.GetUser(id).subscribe({
      next: res => {
        (this.user = res)
      }
    });
  }

  logOut() {
    this.authService.Logout();
    this.router.navigate(['/']);
  }
}
