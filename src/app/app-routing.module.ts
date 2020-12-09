import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FIDERatingInitComponent } from './components/FIDERatingInit/fiderating-init.component'
import { FIDERatingChangeSingleComponent } from './components/FIDERatingChangeSingle/fiderating-change-single.component';

const routes: Routes = [
  { path: '', component: FIDERatingInitComponent },
  { path: 'init', component: FIDERatingInitComponent },
  { path: 'single', component: FIDERatingChangeSingleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
