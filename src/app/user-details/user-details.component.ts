import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnChanges {
  @Input('user') user: User;
  message: string;
  constructor() { }

  ngOnChanges() {
    this.describeUser();
  }

  describeUser() {
    this.message = `You have clicked on ${this.user.getfirstName()} ${this.user.getLastName()}. Their age is ${this.user.getAge()}`
  }

}
