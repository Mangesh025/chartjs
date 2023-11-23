import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './shared/components/bar-chart/bar-chart.component';
import { LineChartComponent } from './shared/components/line-chart/line-chart.component';
import { PieChartComponent } from './shared/components/pie-chart/pie-chart.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'barchart', component: BarChartComponent
  },
  {
    path: 'linechart', component: LineChartComponent
  },
  {
    path: 'piechart', component: PieChartComponent
  },
  {
    path: 'pagenotfound', component:PagenotfoundComponent,
    data: {errorMsg: 'Oops.. page not found 404'}
  },
  {
    path: '**', redirectTo: 'pagenotfound',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
