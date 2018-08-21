import { TestBed, inject } from '@angular/core/testing';
import {HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;
  let http: HttpClient;

  beforeEach(() => {
    service = new ApiService(http);

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [ApiService]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should return somehting when getWeatherinfo is called',
    (done: DoneFn) => {
    service.getWeatherinfo().subscribe(value => {
      expect(value).toBeTruthy();
      done();
    });
  });
});
