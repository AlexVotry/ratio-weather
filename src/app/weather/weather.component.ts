import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { store, BroadcasterModalService } from '../service/data.service';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(
    private _api: ApiService,
    private _modal: BroadcasterModalService,
    private _service: WeatherService
  ) { }

  public days = [];
  public data = {};
  public dailySummary;
  public current;
  public alerts;
  public hours = [];
  public hourlySummary;
  public modalData;
  public location;
  public showModal = false;
  public subscription: Subscription;

  ngOnInit() {
    this.subscription = store.location$.subscribe(location => {
      this.location = location;
      this._api.getLocation(location).subscribe(data => {
        const latitude = data.resourceSets[0].resources[0].geocodePoints[0].coordinates[0];
        const longitude = data.resourceSets[0].resources[0].geocodePoints[0].coordinates[1];
        this.getWeatherinfo(latitude, longitude);
      });
    });
    this.subscription = this._modal.update$
    .subscribe(update => this.showModal = update);
  }

  getWeatherinfo(lat, long) {
    this._api.getWeatherinfo(lat, long).subscribe(data => {
      this.dailySummary = data.daily.summary;
      this.days = data.daily.data.slice(1);
      this.current = data.currently;
      this.alerts = data.alerts;
      this.hourlySummary = data.hourly.summary;
      this.hours = data.hourly.data.slice(0, 24);
      this._service.formatHours(this.hours);
      this._service.formatDays(this.days);
      console.log('data: ', data);
      console.log('alerts: ', this.alerts);
    });
  }

  getHourlyModal(chosen) {
    this.showModal = true;
    this.modalData = {index: chosen, slides: this.hours, hourly: true };
  }

  getDailyModal(chosen) {
    this.showModal = true;
    this.modalData = {index: chosen, slides: this.days, daily: true };
  }

  getAlertModal(chosen) {
    this.showModal = true;
    this.modalData = {index: chosen, slides: this.alerts, icon: 'alerts', alerts: true };
  }

}
