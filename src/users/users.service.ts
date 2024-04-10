import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  apellido: string;
  edad: number;
}

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

  getUsers(): User[] {
    return this.users;
  }
}
