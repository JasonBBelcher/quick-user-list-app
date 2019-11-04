import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any[];

  constructor() {
    this.users = [];
    this.users.push(new User('Jason', 'Belcher', 40));
    this.users.push(new User('Alison', 'Belcher', 45));
    this.users.push(new User('Ben', 'Belcher', 64));
    this.users.push(new User('Carolyn', 'Eppler', 65));
    this.users.push(new User('Ashley', 'Fidler', 40));
    this.users.push(new User('Susan', 'South', 63));
    console.log(this.users)
  }

  getUsers(): Promise<any> {
    return Promise.resolve(this.users);
  }

}
