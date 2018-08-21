import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../service/api.service';
import { HourlyComponent } from './hourly.component';
import {HttpClientModule } from '@angular/common/http';

describe('HourlyComponent', () => {
  let component: HourlyComponent;
  let fixture: ComponentFixture<HourlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ HourlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
