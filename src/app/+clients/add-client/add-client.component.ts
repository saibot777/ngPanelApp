import { ClientService } from './../shared/services/client.service';
import { Client } from './../shared/models/client.model';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages/module";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };
  disableBalanceOnAdd: boolean = true;

  constructor(
    public flashMessagesService: FlashMessagesService,
    private clientService: ClientService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: { value: Client, valid: boolean }) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }
    if (!valid) {
      this.flashMessagesService.show('Please fill in all the fields', {cssClass: 'alert-danger', timeout: 4000});
      // this.router.navigate(['add-client']);
    } else {
      // Add new client
      this.clientService.newClient(value);
      this.flashMessagesService.show('New client added',  {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['../']);
    }
  } 

}
