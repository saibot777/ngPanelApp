import { DashboardComponent } from './+dashboard/dashboard.component';
import { PageNotFoundComponent } from './+auth/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }