import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-publiclayout',
  templateUrl: './publiclayout.component.html',
  styleUrls: ['./publiclayout.component.css']
})
export class PubliclayoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  user: User;
  ngOnInit() {
    this.authService.IsLogin().subscribe((data: Boolean) => {
      if (data) {
        this.authService.GetUserDetails().subscribe((userData: User) => {
          if (userData.roles.indexOf("Admin") > -1) {
            this.router.navigate(["/admin"]);
          } else
            if (userData.roles.indexOf("User") > -1) {
              this.router.navigate(["/user"]);
            }
        })
      }
    })
  }
}
