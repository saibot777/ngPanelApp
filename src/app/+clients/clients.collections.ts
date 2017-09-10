import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './../+dashboard/dashboard.component';
import { ClientService } from './shared/services/client.service';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ClientsComponent } from './clients/clients.component';
import { AddClientComponent } from './add-client/add-client.component';

export const clientsComponents = [
    AddClientComponent,
    ClientsComponent,
    SidebarComponent,
    EditClientComponent,
    DashboardComponent,
    ClientDetailsComponent
];

export const clientsServices = [
    ClientService
];