import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'environments/environment';

import { Forecast } from '@shared/models/forecast.model';


@Injectable({ providedIn: 'root' })
export class WeatherHttpService {

    constructor(private httpClient: HttpClient) { }

    public getByCityName(name: string): Observable<Forecast> {
        return this.httpClient.get<Forecast>(`${environment.apiUrl}?q=${name}&appid=${environment.apiKey}`)
    }

    public getByCityId(id: number): Observable<Forecast> {
        return this.httpClient.get<Forecast>(`${environment.apiUrl}?id=${id}&appid=${environment.apiKey}`)
    }

    public getByCoordinates(lat: number, long: number): Observable<Forecast> {
        return this.httpClient.get<Forecast>(`${environment.apiUrl}?lat=${lat}&lon=${long}&appid=${environment.apiKey}`)
    }
}
