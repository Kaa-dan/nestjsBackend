import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'nithin', lastname: 'raj', role: 'ENGINEER' },
    { id: 1, name: 'nithin', lastname: 'rs', role: 'INTERN' },
    { id: 1, name: 'nithin', lastname: 'sg', role: 'DEVELOPER' },
  ];

  //   find all user
  findAll(role?: 'INTERN' | 'ENGINEER') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  //findone user
  findOne(id: number) {
    return this.users.filter((user) => user.id === id);
  }

  create(user: { id: number; name: string; lastname: string; role: string }) {
    const HIGHEST_USER_ID = [...this.users.sort((a, b) => b.id - a.id)];
    const newUser = {
      id: HIGHEST_USER_ID[0].id,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updateUser: {
      name?: string;
      lastname?: string;
      role?: 'INTERN' | 'DEVELOPER';
    },
  ) {
    this.users = this.users.map((singleUser) => {
      if (singleUser.id === id) return { ...singleUser, ...updateUser };
      return singleUser;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
