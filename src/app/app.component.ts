import { Component } from '@angular/core';
import { store } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `${this.city} weather`;

  city: string;
  state: string = "WA";

  addCity(city: string) {
    this.city = city;
    this.newlocation();
  }

  addState(state: string) {
    this.state = state;
    this.newlocation();
  }

  newlocation() {
    const location = {
      city: this.city,
      state: this.state
    };
    store.updatelocation(location);
  }




}
