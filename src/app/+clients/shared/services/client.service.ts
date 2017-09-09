import { Client } from './../models/client.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {
    clients: FirebaseListObservable<any[]>;
    client: FirebaseObjectObservable<any>;

    constructor(public af: AngularFireDatabase) { }

    public getClientsList() {
        return this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
    }

}