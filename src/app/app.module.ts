import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyComponent } from './daily/daily.component';
import { HourlyComponent } from './hourly/hourly.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyComponent,
    HourlyComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
