import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersRepo {
    constructor(private prisma: PrismaService){}
  async createUser(createUserDto: CreateUserDto) {
    const {email, password} = createUserDto;
    return this.prisma.users.create({
        data: {email, password}
    })
  }
}
