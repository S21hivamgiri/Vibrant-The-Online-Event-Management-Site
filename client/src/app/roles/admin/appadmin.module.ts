import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlayoutComponent } from './adminlayout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AddeventComponent } from './addevent/addevent.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { AddspeakerComponent } from './addspeaker/addspeaker.component';
import { AddsponsorsComponent } from './addsponsors/addsponsors.component';
import { AddoffersComponent } from './addoffers/addoffers.component';
import { ProfileComponent } from './profile/profile.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SharedAppModule } from '../../shared/app-shared.module';
import { EventComponent } from './event/event.component';
import { EventidComponent } from './eventid/eventid.component';

@NgModule({
  declarations: [AdminlayoutComponent, EventComponent,
    AddeventComponent, ViewusersComponent, AddspeakerComponent,
    AddsponsorsComponent, AddoffersComponent, ProfileComponent, EventidComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    SharedAppModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule
  ]
})
export class AppadminModule { }
