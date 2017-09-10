import { Client } from './../shared/models/client.model';
import { ClientService } from './../shared/services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any[];
  totalOwed: number;

  constructor(
    public clientService: ClientService
  ) { }

  ngOnInit(): void {
      this.getClients();
      // this.getTotalOwed();
  }

  public getClients() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
    });
  }

  // To Fix
  // public getTotalOwed() {
  //   let total = 0;
  //   for (let i = 0; i < this.clients.length; i++) {
  //     total += parseFloat(this.clients[i].balance);
  //   }
  //    this.totalOwed = total;
  //   console.log(this.totalOwed);
  // }

}
