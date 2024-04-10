import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      name: 'Cristhian',
      apellido: 'Rodríguez',
      edad: 23,
    },
    {
      name: 'Gabriel',
      apellido: 'Amón',
      edad: 27,
    },
  ];

  getUsers() {
    return this.users;
  }
}
