import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { DatetrackComponent } from './datetrack/datetrack.component';
import { EventComponent } from '../event/event.component';
import { SponserComponent } from './sponser/sponser.component';
import { AppFeedbackComponent } from './app-feedback/app-feedback.component';
import { MobileComponent } from './mobile/mobile.component';
import { LayoutComponent } from './homepage/layout.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { OfferComponent } from './offer/offer.component';
import { CommonModule, DatePipe } from '@angular/common';
import { PubliclayoutComponent } from '../publiclayout.component';
import { EventidComponent } from '../eventid/eventid.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ViewspeakerComponent } from './viewspeaker/viewspeaker.component';

@NgModule({
    declarations: [
        NotfoundComponent,
        LoginComponent,
        SignupComponent,
        DatetrackComponent,
        EventComponent,
        SponserComponent,
        AppFeedbackComponent,
        MobileComponent,
        LayoutComponent,
        ContactComponent,
        GalleryComponent,
        OfferComponent,
        PubliclayoutComponent,
        EventidComponent,
        ViewspeakerComponent
    ],
    imports: [
        FullCalendarModule,
        CommonModule,
        HttpClientModule,
        RouterModule,
        FormsModule,
    ],
    providers: [DatePipe],
})
export class SharedAppModule { }
