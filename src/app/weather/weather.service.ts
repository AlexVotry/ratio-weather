import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  formatHours(hours) {
    _.forEach(hours, (hour) => {
      let rawTime = new Date(hour.time * 1000).getHours();
      let postfix = "AM";
      let h = rawTime;
      hour.temp = Math.round(hour.apparentTemperature);

      if (rawTime >= 12) {
        h = rawTime - 12;
        postfix = "PM";
      }

      if (h == 0) {
        h = 12;
      }

      hour.formattedTime = `${h} ${postfix}`;
    })
    console.log(hours[0].formattedTime);
  }

  formatDays(days) {
    _.forEach(days, (day) => {
      day.highTime = this.readableTime(day.apparentTemperatureHighTime);
      day.lowTime = this.readableTime(day.apparentTemperatureLowTime);
      day.sunrise = this.readableTime(day.sunriseTime);
      day.sunset = this.readableTime(day.sunsetTime);
      day.highTemp = Math.round(day.apparentTemperatureHigh);
      day.lowTemp = Math.round(day.apparentTemperatureLow);
    })
  }

  readableTime(time) {
    let hours = new Date(time * 1000).getHours();
    let minutes = new Date(time * 1000).getMinutes();
    let postfix = "AM";
    let h = hours;
    let m = String(minutes);
    if (hours >= 12) {
      h = hours - 12;
      postfix = "PM";
    }

    if (h == 0) {
      h = 12;
    }

    if (minutes < 10) {
      m = `0${String(minutes)}`;
    }
     return `${h}:${m} ${postfix}`;
  }
}
