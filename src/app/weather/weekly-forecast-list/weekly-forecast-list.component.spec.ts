import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyForecastListComponent } from './weekly-forecast-list.component';


describe('WeeklyForecastListComponent', () => {
  let component: WeeklyForecastListComponent;
  let fixture: ComponentFixture<WeeklyForecastListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyForecastListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyForecastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
