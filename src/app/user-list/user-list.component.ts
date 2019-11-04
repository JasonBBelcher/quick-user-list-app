import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input('users') users: User[];
  selectedUser: User;
  selectedIndex: number;

  constructor() { }

  ngOnInit() {
  }

  selectUser(user: User) {
    this.selectedIndex
    this.selectedUser = user;
  }

  selectIndex(index: number) {
    this.selectedIndex = index;
  }



}
