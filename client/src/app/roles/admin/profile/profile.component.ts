import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  constructor(private userService: UserService, private router: Router, private authService: AuthService) {
    this.user = new User();
  };
  ngOnInit() {
    this.authService.GetUserDetails().subscribe((data) => {
      this.Getuser(data.userId)
    });
  }

  logOut() {
    this.authService.Logout();
    this.router.navigate(['/']);
  }

  Getuser(id) {
    this.userService.GetUser(id).subscribe({
      next: res => {
        (this.user = res)
      }
    });
  }

}
