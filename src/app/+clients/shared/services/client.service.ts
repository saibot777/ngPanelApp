import { Client } from './../models/client.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(
    public af: AngularFireDatabase
  ) { }

  public getClients() {
    return this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
  }

}
