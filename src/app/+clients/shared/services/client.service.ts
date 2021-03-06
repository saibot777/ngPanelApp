import { Client } from './../models/client.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(public af: AngularFireDatabase) {
      this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
   }

  public getClients() {
    return this.clients;
  }

  newClient(client: Client) {
    this.clients.push(client);
  }

}
