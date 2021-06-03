import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PannelloCentraleComponent } from './pannello-centrale/pannello-centrale.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'prova', component: PannelloCentraleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }