import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepo {

  constructor(private prisma: PrismaService) { }


  async createUser(user: User) {
    const { email, password } = user;
    return this.prisma.users.create({ data: { email, password } })
  }

  async findAll() {
    return await this.prisma.users.findMany()
  }

  async findUserByEmail(email: string) {
    return await this.prisma.users.findFirst({ where: { email } })
  }


}
