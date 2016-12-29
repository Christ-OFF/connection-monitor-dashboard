import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PingService } from './ping.service';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { PingslistComponent } from './pingslist/pingslist.component';
import { HomeComponent } from './home/home.component';
import { DateFormatPipe } from './date-format.pipe';
import { PercentFormatPipe } from './percent-format.pipe';

import { ResultFilterComponent } from './result-filter/result-filter.component';
import { DatetimeValidatorDirective } from './datetime-validator.directive';
import { CommonModule } from '@angular/common';
import { LatencychartComponent } from './latencychart/latencychart.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LatencyPipe } from './latency.pipe';
import { DnsindicatorComponent } from './dnsindicator/dnsindicator.component';
import { LossindicatorComponent } from './lossindicator/lossindicator.component';
import { LatencyindicatorComponent } from './latencyindicator/latencyindicator.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PingslistComponent,
    DateFormatPipe,
    PercentFormatPipe,
    ResultFilterComponent,
    DatetimeValidatorDirective,
    LatencychartComponent,
    LatencyPipe,
    DnsindicatorComponent,
    LossindicatorComponent,
    LatencyindicatorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ChartsModule

  ],
  providers: [ PingService ],
  bootstrap: [ AppComponent ],

})
export class AppModule { }
