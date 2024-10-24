import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'nithin', lastname: 'raj', role: 'ENGINEER' },
    { id: 1, name: 'nithin', lastname: 'rs', role: 'INTERN' },
    { id: 1, name: 'nithin', lastname: 'sg', role: 'DEVELOPER' },
  ];
  findAll(role?: 'INTERN' | 'ENGINEER') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  findOne(id: number) {
    
    return this.users.filter((user) => user.id === id);
  }
}
