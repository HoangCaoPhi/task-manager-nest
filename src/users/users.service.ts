import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [];

    create(username: string, hashedPassword: string): User {
        const user = {id: Date.now(), username, password: hashedPassword};
        this.users.push(user);
        return user;
    }

    findByUserName(username: string): User | undefined {
        return this.users.find(u => u.username === username);
    }
}
