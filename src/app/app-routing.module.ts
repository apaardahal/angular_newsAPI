import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechComponent } from './tech/tech.component';
import {TopheadlineComponent} from './topheadline/topheadline.component'
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {path: '', component: TopheadlineComponent},
  {path: 'tech', component: TechComponent},
  {path: '', component: TopheadlineComponent},
  {path: 'business', component: BusinessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
