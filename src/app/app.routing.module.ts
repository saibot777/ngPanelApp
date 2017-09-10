import { ClientDetailsComponent } from './+clients/client-details/client-details.component';
import { ClientsComponent } from './+clients/clients/clients.component';
import { AddClientComponent } from './+clients/add-client/add-client.component';
import { LoginComponent } from './+auth/login/login.component';
import { RegisterComponent } from './+auth/register/register.component';
import { DashboardComponent } from './+dashboard/dashboard.component';
import { PageNotFoundComponent } from './+auth/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { 
        path: 'dashboard', 
        component: DashboardComponent,
        children: [
          {
            path: '', redirectTo: 'clients', pathMatch: 'full'
          },
          {
            path: 'clients', 
            component: ClientsComponent,
            children: [
              
                {
                  path: 'clients/:id',
                  component: ClientDetailsComponent
                },
              
            ]
          },
          {
            path: 'add-client', component: AddClientComponent
          }
        ] 
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }