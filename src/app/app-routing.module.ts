import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksListComponent } from './stocks-list/stocks-list.component';


const routes: Routes = [

  { path: 'stocks', component: StocksListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
