import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));

  it('formats hours', inject([WeatherService], (service: WeatherService) => {
    // create hours array with hour object with necessary properties
    let hours = [
      {
        time: 1534957200,
        apparentTemperature: '69.96',
      },
      {
        time: 1534960800,
        apparentTemperature: '73.06'
      }
    ];

    service.formatHours(hours);
    expect(hours[0].formattedTime).toMatch('10 AM');
  }));


});
