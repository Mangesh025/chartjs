import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartComponent } from './shared/components/pie-chart/pie-chart.component';
import { LineChartComponent } from './shared/components/line-chart/line-chart.component';
import { BarChartComponent } from './shared/components/bar-chart/bar-chart.component';
import { NavabarComponent } from './shared/components/navabar/navabar.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
    NavabarComponent,
    PagenotfoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
