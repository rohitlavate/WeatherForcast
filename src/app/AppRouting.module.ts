import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FiveDayForecastComponent } from "./weatherForcast/fiveDayForcast.component";
import { WeatherSummaryComponent } from "./weatherSummary/weatherSummary.component";

const routes: Routes = [
    {
        path: 'welcome', component: WeatherSummaryComponent
    },
    {
        path: 'forcast/:city', component: FiveDayForecastComponent
    },
    {
        path: '', redirectTo: 'welcome', pathMatch: 'full'
    }
    // add path * for 404
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}