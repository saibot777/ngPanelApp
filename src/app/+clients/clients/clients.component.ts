import { Client } from './../shared/models/client.model';
import { ClientService } from './../shared/services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  private getClients() {
    this.clientService.getClientsList().subscribe(clients => {
      this.clients = clients;
      console.log(this.clients);
    });
  }

}
