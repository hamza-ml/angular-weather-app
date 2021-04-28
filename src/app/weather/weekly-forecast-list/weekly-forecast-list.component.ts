import { Component, Input, OnInit } from '@angular/core';

import { Forecast } from '@shared/models/forecast.model';


@Component({
  selector: 'app-weekly-forecast-list',
  templateUrl: './weekly-forecast-list.component.html',
  styleUrls: ['./weekly-forecast-list.component.css']
})
export class WeeklyForecastListComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() weatherForecast: Forecast = null;

  public displayedColumns: Array<string> = [
    'dt_txt',
    'temp_min',
    'temp_max',
    'humidity',
    'description'
  ];

  constructor() { }

  ngOnInit(): void { }

  public getDescription(weather: string): string {
    let [description] = weather;
    return description;
  }
  
}