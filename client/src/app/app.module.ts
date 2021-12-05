import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedAppModule } from './shared/app-shared.module';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './services/authgaurd.service';

@NgModule({
  declarations: [AppComponent
  ],
  imports: [
    SharedAppModule, BrowserModule, AppRoutingModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuardService],
})
export class AppModule { }
