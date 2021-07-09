import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { openweatherapi } from "./model";
import * as moment from 'moment-timezone';

@Injectable()
export class WeatherForecastService {
    url;
    constructor(private http: HttpClient) {

    }
    getCityWeather(cityObj): Observable<any> {
        this.url = openweatherapi.replace('CITY', cityObj.city).replace('COUNTRY', cityObj.country);
        return this.http.get(this.url);
    }

    formatWeather(res) {
        let formatedData = {};
        formatedData['city'] = res.name;
        formatedData['temperature'] = res.main.temp;
        formatedData['icon'] = res.weather[0].icon;
        formatedData['sunrise'] = this.convertTime(res.sys.sunrise, res.timezone);
        formatedData['sunset'] = this.convertTime(res.sys.sunset, res.timezone);
        return formatedData;
    }

    convertTime(unixTime, offset) {
        const d = new Date((unixTime + offset) * 1000);
        const localTime = d.getTime();
        const localOffset = d.getTimezoneOffset() * 60000;
        const utc = localTime + localOffset;
        const nd = new Date(utc);  
        return moment(nd).format('LT');
    }
}