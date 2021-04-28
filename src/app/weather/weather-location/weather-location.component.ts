import { FormControl } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Position } from '@models/position.model';
import { Coordinates } from '@models/coordinates.model';

import { UserDevice } from '@enums/user-device.enum';
import { UserLocation } from '@enums/user-location.enum';


@Component({
  selector: 'app-weather-location',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.css']
})
export class WeatherLocationComponent implements OnInit {
  @Output() selectedCity: EventEmitter<string>;
  @Output() userCoordinates: EventEmitter<Coordinates>;

  public filteredList: Observable<Array<string>>;
  public cityControl: FormControl = new FormControl();
  public cityList: Array<string> = [
    'London',
    'Islamabad',
    'New York',
    'Berlin',
    'Seoul',
    'Tokyo',
    'Paris',
    'Beijing',
    'Cairo',
    'Barcelona'
  ];

  constructor(private matSnackBar: MatSnackBar) {
    this.selectedCity = new EventEmitter<string>();
    this.userCoordinates = new EventEmitter<Coordinates>();
  }

  ngOnInit(): void {
    this.setCityList();
  }

  private setCityList(): void {
    this.filteredList = this.cityControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.filterInput(value))
    );
  }

  private filterInput(value: string): Array<string> {
    const filterValue = value.toLowerCase();
    return this.cityList.filter(option => option.toLowerCase().includes(filterValue));
  }

  private getUserLocation(): void {
    const postionOptions = { maximumAge: UserLocation.MaximumAge, timeout: UserLocation.Timeout, enableHighAccuracy: false };
    navigator.geolocation.getCurrentPosition(this.locationSuccessCallback, this.errorCallback, postionOptions);
  }

  private locationSuccessCallback = async (position: Position) => {
    const latitude = +position.coords.latitude.toFixed(2);
    const longitude = +position.coords.longitude.toFixed(2);

    this.userCoordinates.emit({ latitude, longitude });
  }

  private errorCallback = (error: any) => {
    if (+window.localStorage.getItem('alertCount') === 0 && window.innerWidth <= UserDevice.Width) { // for mobile devices
      alert('Angular weather app would like to access your location. Please turn on your GPS.');
      window.localStorage.setItem('alterCount', '1'); // show alert only single time
    }
    setTimeout(() => this.getUserLocation(), UserLocation.Timeout);
  }

  public chooseLocationOnClick(): void {
    this.getUserLocation();
  }

  public searchOnClick(): void {
    if (this.cityList.includes(this.cityControl.value)) {
      this.selectedCity.emit(this.cityControl.value);
    } else {
      this.matSnackBar.open('Please choose a city from the given options!', 'Close');
    }
  }

}
