import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor(private userService: UserService, readonly router: Router) { }
  user: User;
  ngOnInit(): void {
    let userDetail = JSON.parse(window.localStorage.getItem("user"));
    this.userService.GetUser(userDetail.userId).subscribe((res) => {
      this.user = res;
    });
  }
  getDate(data: string) {
    return new Date(data);
  }
}
