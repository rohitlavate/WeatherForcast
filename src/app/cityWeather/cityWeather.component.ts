import { Component, Input, OnInit } from "@angular/core";
import { iconUrl } from "../model";
import { WeatherForecastService } from "../weatherForecast.service";

@Component({
    selector: 'city-weather-summary',
    templateUrl: './cityWeather.component.html',
    styleUrls: ['./cityWeather.component.css']
})
export class CityWeatherComponent implements OnInit {
    @Input('cityObj') cityObj;
    cityWeather: any = {};
    constructor(private weatherForecastService: WeatherForecastService) {

    }
    ngOnInit() {
        this.weatherForecastService.getCityWeather(this.cityObj).subscribe((res) => {
            const formatedData =  this.weatherForecastService.formatWeather(res);
            this.cityWeather['city'] = formatedData['city'];
            this.cityWeather['temperature'] = formatedData['temperature'];
            this.cityWeather['sunrise'] = formatedData['sunrise'];
            this.cityWeather['sunset'] = formatedData['sunset'];
            this.cityWeather['icon'] = iconUrl.replace('ICON', formatedData['icon']);
            this.cityWeather['color'] = 'white';
        })
    }
}