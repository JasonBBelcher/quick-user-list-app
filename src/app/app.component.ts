import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[]

  constructor(private usersvc: UserService) {

  }


  ngOnInit() {
    this.usersvc.getUsers().then((users) => {
      this.users = users;
    })
  }


  getUsers() {
    return this.usersvc.getUsers();
  }
}
