import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../service/api.service';
import { DailyComponent } from './daily.component';
import {HttpClientModule } from '@angular/common/http';

describe('DailyComponent', () => {
  let component: DailyComponent;
  let fixture: ComponentFixture<DailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ DailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
