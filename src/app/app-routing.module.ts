import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WizzardComponent } from './wizzard/wizzard.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'wizzard/:1', component: WizzardComponent },
  { path: 'wizzard/:2', component: WizzardComponent },
  { path: 'wizzard/:3', component: WizzardComponent },
  { path: 'wizzard/:4', component: WizzardComponent },
  { path: 'wizzard/:5', component: WizzardComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
