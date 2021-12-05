import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/model/feedback.model';
import { User } from 'src/app/model/user.model';
import FeedbackService from 'src/app/services/feedback.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-app-feedback',
  templateUrl: './app-feedback.component.html',
  styleUrls: ['./app-feedback.component.css']
})
export class AppFeedbackComponent implements OnInit {
  rating: number = 0;
  average = 0;
  feedback: string = ''
  user: any;
  isFeedBackGiven = false;
  constructor(private userService: UserService, readonly feedbackService: FeedbackService, private router: Router) { }

  ngOnInit() {
    let userDetail = JSON.parse(window.localStorage.getItem("user"));
    this.userService.GetUser(userDetail.userId).subscribe((res) => {
      this.user = res;
      this.isFeedBackGiven = this.user.isFeedBackGiven
    });
    this.feedbackService.GetFeedback().subscribe((res) => {
      this.average = Number(res.avg.toFixed(2));
    });
  }

  handlSubmit() {
    const feedBackObj: Feedback = {
      rating: this.rating,
      feedback: this.feedback
    };
    this.userService.UpdateFeedback(this.user._id).subscribe();
    this.feedbackService.AddFeedback(feedBackObj).subscribe((res) => {
      if (res.status === 201) {
        this.router.navigate(['/homepage']);
      }
    });
  }

}
