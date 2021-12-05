import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserLayoutComponent } from './user-layout.component';
import { LayoutComponent } from '../../shared/homepage/layout.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { CartComponent } from './cart/cart.component';
import { MobileComponent } from '../../shared/mobile/mobile.component';
import { GalleryComponent } from '../../shared/gallery/gallery.component';
import { DatetrackComponent } from '../../shared/datetrack/datetrack.component';
import { AppFeedbackComponent } from '../../shared/app-feedback/app-feedback.component';
import { ContactComponent } from '../../shared/contact/contact.component';
import { SponserComponent } from '../../shared/sponser/sponser.component';
import { OfferComponent } from '../../shared/offer/offer.component';
import { EventComponent } from './event/event.component';
import { EventidComponent } from './eventid/eventid.component';

const routes: Routes = [
    {
        path: '', component: UserLayoutComponent, children: [
            { path: '', component: LayoutComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'cart', component: CartComponent },
            { path: "mobile", component: MobileComponent },
            { path: "purchase", component: PurchaseComponent },
            { path: "gallery", component: GalleryComponent },
            { path: "event", component: EventComponent },
            { path: "events/:id", component: EventidComponent },
            { path: "datetrack", component: DatetrackComponent },
            { path: "feedback", component: AppFeedbackComponent },
            { path: "contact", component: ContactComponent },
            { path: "sponsor", component: SponserComponent },
            { path: "offer", component: OfferComponent },
            { path: "**", redirectTo: "notfound" }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class UserRoutingModule { }