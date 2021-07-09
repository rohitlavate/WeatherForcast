import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'five-day-forcast',
    templateUrl: './fiveDayForcast.component.html'
})
export class FiveDayForecastComponent implements OnInit {
    city;
    constructor(private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.route.paramMap.subscribe( params => {
            this.city = params.get('city');
        })
    }

}