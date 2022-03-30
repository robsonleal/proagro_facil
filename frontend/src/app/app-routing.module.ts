import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CroplossListComponent } from './components/croploss-list/croploss-list.component';
import { CroplossDetailsComponent } from './components/croploss-details/croploss-details.component';
import { AddCroplossComponent } from './components/add-croploss/add-croploss.component';
const routes: Routes = [
  { path: '', redirectTo: 'perdas', pathMatch: 'full' },
  { path: 'perdas', component: CroplossListComponent },
  { path: 'perdas/:id', component: CroplossDetailsComponent },
  { path: 'add', component: AddCroplossComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
