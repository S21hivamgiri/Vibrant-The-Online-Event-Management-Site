import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserLayoutComponent } from './user-layout.component';
import { UserRoutingModule } from './app-user-routing.module';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedAppModule } from 'src/app/shared/app-shared.module';
import { EventComponent } from './event/event.component';
import { EventidComponent } from './eventid/eventid.component';
import { PurchaseComponent } from './purchase/purchase.component';

@NgModule({
  declarations: [ProfileComponent, UserLayoutComponent, CartComponent,
    EventComponent, EventidComponent, PurchaseComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedAppModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AppuserModule { }
