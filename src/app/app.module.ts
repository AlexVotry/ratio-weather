import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiService } from './service/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyComponent } from './daily/daily.component';
import { HourlyComponent } from './hourly/hourly.component';
import { WeatherComponent } from './weather/weather.component';
import { ModalComponent } from './modal/modal.component';
import { BroadcasterModalService } from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DailyComponent,
    HourlyComponent,
    WeatherComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService, BroadcasterModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
