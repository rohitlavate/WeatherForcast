import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './AppRouting.module';
import { WeatherSummaryComponent } from './weatherSummary/weatherSummary.component';
import { CityWeatherComponent } from './cityWeather/cityWeather.component';
import { WeatherForecastService } from './weatherForecast.service';
import { FiveDayForecastComponent } from './weatherForcast/fiveDayForcast.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherSummaryComponent,
    CityWeatherComponent,
    FiveDayForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [WeatherForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
