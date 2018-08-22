import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService]
    });
  });

  // mock the hours and Days array with necessary properties
  const hours = [
    {
      time: 1534957200, // 10 am
      apparentTemperature: '69.96',
      formattedTime: '',
      temp: ''
    },
    {
      time: 1534960800, // 11 am
      apparentTemperature: '73.06',
      formattedTime: '',
      temp: ''
    }
  ];

  let days = [
    {
      apparentTemperatureHighTime: 1535068800,
      sunsetTime: 1535080134,
      highTime: '',
      sunset: ''
    }
  ]

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));

  it('formats hours from formatHours', inject([WeatherService], (service: WeatherService) => {
    service.formatHours(hours);
    console.log(service);
    expect(hours[0].formattedTime).toMatch('10 AM');
  }));

  it('rounds degrees to closest integer', inject([WeatherService], (service: WeatherService) => {
    service.formatHours(hours);
    console.log(service);
    expect(hours[0].temp).toMatch('70');
  }));

  it('foramtDays formats high temp time ', inject([WeatherService], (service: WeatherService) => {
    service.formatDays(days);
    console.log(service);
    expect(days[0].highTime).toMatch('5:00 PM');
  }));

  it('formatDays formats sunset time ', inject([WeatherService], (service: WeatherService) => {
    service.readableTime(days);
    console.log(service);
    expect(days[0].sunset).toMatch('8:08 PM');
  }));


});
