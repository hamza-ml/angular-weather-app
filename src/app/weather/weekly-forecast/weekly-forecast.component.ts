import { Component, OnInit } from '@angular/core';

import { catchError, take, tap } from 'rxjs/operators';

import { Coordinates } from '@models/coordinates.model';
import { Forecast } from '@shared/models/forecast.model';

import { WeatherHttpService } from '../weather.http.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-weekly-forecast',
  templateUrl: './weekly-forecast.component.html',
  styleUrls: ['./weekly-forecast.component.css'],
})
export class WeeklyForecastComponent implements OnInit {
  public isLoading: boolean = false;
  public weatherForecast: Forecast = null;

  constructor(private weatherHttpService: WeatherHttpService) {}

  ngOnInit(): void {}

  public userCoordinatesOnEmit(coordinates: Coordinates): void {
    this.isLoading = true;
    this.weatherHttpService
      .getByCoordinates(coordinates.latitude, coordinates.longitude)
      .pipe(
        take(1),
        tap((response: Forecast) => {
          this.weatherForecast = response;
          this.isLoading = false;
        }),
        catchError((err: unknown) => {
          this.isLoading = false;
          return throwError(err);
        })
      )
      .subscribe();
  }

  public citySelectionOnEmit(cityName: string): void {
    this.isLoading = true;
    this.weatherHttpService
      .getByCityName(cityName)
      .pipe(
        take(1),
        tap((response: Forecast) => {
          this.weatherForecast = response;
          this.isLoading = false;
        }),
        catchError((err: unknown) => {
          this.isLoading = false;
          return throwError(err);
        })
      )
      .subscribe();
  }
}
