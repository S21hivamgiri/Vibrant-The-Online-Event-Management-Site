import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminlayoutComponent } from './adminlayout.component';
import { LayoutComponent } from '../../shared/homepage/layout.component';
import { AddspeakerComponent } from './addspeaker/addspeaker.component';
import { EventComponent } from './event/event.component';
import { AddeventComponent } from './addevent/addevent.component';
import { AddoffersComponent } from './addoffers/addoffers.component';
import { AddsponsorsComponent } from './addsponsors/addsponsors.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { ViewspeakerComponent } from '../../shared/viewspeaker/viewspeaker.component';
import { OfferComponent } from '../../shared/offer/offer.component';
import { DatetrackComponent } from '../../shared/datetrack/datetrack.component';
import { ProfileComponent } from './profile/profile.component';
import { SponserComponent } from '../../shared/sponser/sponser.component';
import { EventidComponent } from './eventid/eventid.component';

const routes: Routes = [
    {
        path: '', component: AdminlayoutComponent, children: [
            { path: 'event', component: EventComponent },
            { path: "events/:id", component: EventidComponent },
            { path: '', component: LayoutComponent },
            { path: 'addspeaker', component: AddspeakerComponent },
            { path: 'addevent', component: AddeventComponent },
            { path: 'addoffer', component: AddoffersComponent },
            { path: 'addsponsor', component: AddsponsorsComponent },
            { path: 'offer', component: OfferComponent },
            { path: 'users', component: ViewusersComponent },
            { path: 'datetrack', component: DatetrackComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'sponsor', component: SponserComponent },
            { path: 'speaker', component: ViewspeakerComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }