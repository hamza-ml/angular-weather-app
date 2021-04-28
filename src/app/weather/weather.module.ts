import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { WeatherRoutingModule } from './weather-routing.module';

import { WeeklyForecastComponent } from './weekly-forecast/weekly-forecast.component';
import { WeatherLocationComponent } from './weather-location/weather-location.component';
import { WeeklyForecastListComponent } from './weekly-forecast-list/weekly-forecast-list.component';


@NgModule({
  declarations: [
    WeeklyForecastComponent,
    WeatherLocationComponent,
    WeeklyForecastListComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
    MatFormFieldModule,
    WeatherRoutingModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ]
})
export class WeatherModule { }
