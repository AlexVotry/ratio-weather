import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const apiUrl = '/api';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  private bingApi = environment.bingApi;
  private bingKey = environment.bingKey;

  getLocation(location) {
    const url = `${this.bingApi}${location.city},${location.state}${this.bingKey}`;
    interface LocationResponse {
        resourceSets: {}
    }
    return this.http.get<LocationResponse>(url);
  }

  getWeatherinfo(latitude, longitude) {
    interface WeatherResponse {
      alerts: string[],
      currently: {
        icon: string,
        time: string,
        summary: string
      },
      daily: {
        data: string[],
        summary: string
      },
      hourly: {
        data: string[],
        summary: string
      }
    }
    let location = `${latitude},${longitude}`;
    return this.http.get<WeatherResponse>(`${apiUrl}/${location}`);
  }

}
