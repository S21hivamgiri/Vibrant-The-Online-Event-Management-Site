import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  passtype: String;
  constructor(private authService: AuthService, private router: Router) {
    this.user = new User();
    this.user.offer = false;
    this.passtype = "password";
  }

  ngOnInit() { }
  pass() {
    if (this.passtype === "password")
      this.passtype = "text";
    else
      this.passtype = "password"
  }

  SaveData(form: NgForm) {
    var e = document.getElementById("code") as HTMLSelectElement;
    var option = e.options[e.selectedIndex];
    var country = option.getAttribute("country");
    this.user.country = country;
    if (form.valid) {
      this.authService.SignUp(this.user).subscribe(res => {
        if (res.status === 201) {
          this.router.navigate(["/login"]);
        }
      });
    }
  }
}
