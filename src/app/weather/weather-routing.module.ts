import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyForecastComponent } from './weekly-forecast/weekly-forecast.component';

const routes: Routes = [{
  path: '', component: WeeklyForecastComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
