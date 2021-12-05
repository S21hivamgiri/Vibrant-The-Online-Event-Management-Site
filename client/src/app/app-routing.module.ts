import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/homepage/layout.component';
import { MobileComponent } from './shared/mobile/mobile.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { DatetrackComponent } from './shared/datetrack/datetrack.component';
import { SignupComponent } from './signup/signup.component';
import { EventComponent } from './event/event.component';
import { AppFeedbackComponent } from './shared/app-feedback/app-feedback.component';
import { ContactComponent } from './shared/contact/contact.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { SponserComponent } from './shared/sponser/sponser.component';
import { OfferComponent } from './shared/offer/offer.component';
import { PubliclayoutComponent } from './publiclayout.component';
import { EventidComponent } from './eventid/eventid.component';
import { AuthGuardService } from './services/authgaurd.service';

const routes: Routes = [
  {
    path: 'user', loadChildren: () => import('./roles/user/appuser.module').then(mod => mod.AppuserModule),
    canActivate: [AuthGuardService],
    data: {
      role: 'User'
    }
  },
  {
    path: 'admin', loadChildren: () => import('./roles/admin/appadmin.module').then(mod => mod.AppadminModule),
    canActivate: [AuthGuardService],
    data: {
      role: 'Admin'
    },
  },
  {
    path: "", component: PubliclayoutComponent,
    children: [
      { path: "", component: LayoutComponent },
      { path: "mobile", component: MobileComponent },
      { path: "gallery", component: GalleryComponent },
      { path: "login", component: LoginComponent },
      { path: "signup", component: SignupComponent },
      { path: "notfound", component: NotfoundComponent },
      { path: "datetrack", component: DatetrackComponent },
      { path: "feedback", component: AppFeedbackComponent },
      { path: "contact", component: ContactComponent },
      { path: "event", component: EventComponent },
      { path: "events/:id", component: EventidComponent },
      { path: "sponsor", component: SponserComponent },
      { path: "offer", component: OfferComponent },
      { path: "**", redirectTo: "notfound" },
    ]
  }, { path: "mobile", component: MobileComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "notfound", component: NotfoundComponent },
  { path: "datetrack", component: DatetrackComponent },
  { path: "feedback", component: AppFeedbackComponent },
  { path: "contact", component: ContactComponent },
  { path: "event", component: EventComponent },
  { path: "events/:id", component: EventidComponent },
  { path: "sponsor", component: SponserComponent },
  { path: "offer", component: OfferComponent },
  { path: "**", redirectTo: "notfound" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
