import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private darkskyApi = environment.darkskyApi;
  private bingApi = environment.bingApi;
  private bingKey = environment.bingKey;
  private weatherAPI;
  public latitude;
  public longitude;

  getLocation(location) {
    const url = `${this.bingApi}${location.city},${location.state}${this.bingKey}`;
    interface LocationResponse {
        resourceSets: {}
    }
    return this.http.get<LocationResponse>(url);
  }

  getWeatherinfo(latitude = this.latitude, longitude = this.longitude) {
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
    this.latitude = latitude;
    this.longitude = longitude;
    this.weatherAPI = `${this.darkskyApi}/${this.latitude},${this.longitude}`;

    return this.http.get<WeatherResponse>(this.weatherAPI);
  }

}
