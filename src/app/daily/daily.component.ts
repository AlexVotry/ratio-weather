import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { store } from '../service/data.service';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  constructor(private _api: ApiService) { }

  public days = [];
  public dailySummary;
  public current;
  public alerts;
  public hours = [];
  public hourlySummary;
  public location;
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
  }

  getWeatherinfo(lat, long) {
    this._api.getWeatherinfo(lat, long).subscribe(data => {
      this.dailySummary = data.daily.summary;
      this.days = data.daily.data.slice(1);
      this.current = data.currently;
      this.alerts = data.alerts;
      this.hourlySummary = data.hourly.summary;
      this.hours = data.hourly.data.slice(0, 24);
      this.formatHours(this.hours);
    });
  }

  formatHours(hours) {
    _.forEach(hours, (hour) => {
      let rawTime = new Date(hour.time * 1000).getHours();
      let postfix = "AM";
      let h = rawTime;

      if (rawTime >= 12) {
        h = rawTime - 12;
        postfix = "PM";
      }

      if (h == 0) {
        h = 12;
      }
      
      hour.formattedTime = `${h}:00 ${postfix}`;
    })
  }

}
