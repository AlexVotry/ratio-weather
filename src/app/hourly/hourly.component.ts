import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { store } from '../service/data.service';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss']
})
export class HourlyComponent implements OnInit {

constructor(private _api: ApiService) { }

  public hours = [];
  public summary;
  public subscription: Subscription;

  ngOnInit() {
  }

  // getWeatherinfo() {
  //   this._api.getWeatherinfo().subscribe(data => {
  //     this.summary = data.hourly.summary;
  //     this.hours = data.hourly.data.slice(0, 24);
  //     console.log('hours: ', this.hours);
  //     this.formatHours(this.hours);
  //   });
  // }
  //
  // formatHours(hours) {
  //   _.forEach(hours, (hour) => {
  //     let rawTime = new Date(hour.time * 1000).getHours();
  //     let postfix = "AM";
  //     let h = rawTime;
  //     if (rawTime >= 12) {
  //       h = rawTime - 12;
  //       postfix = "PM";
  //     }
  //
  //     if (h == 0) {
  //       h = 12;
  //     }
  //     hour.formattedTime = `${h}:00 ${postfix}`;
  //   })
  // }

}
