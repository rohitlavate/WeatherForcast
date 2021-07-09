import { Component } from "@angular/core";
import { listOfCities } from "../model";

@Component({
    selector: 'weather-summary',
    templateUrl: './weatherSummary.component.html'
})
export class WeatherSummaryComponent {
    listOfCities = listOfCities;
}