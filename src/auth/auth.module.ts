import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthRepo } from './auth-repo';
import { UsersRepo } from 'src/users/users-repo';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Module({
  exports: [AuthModule],
  imports: [PrismaModule, User],
  controllers: [AuthController],
  providers: [AuthService, AuthRepo, UsersRepo, UsersService]
})
export class AuthModule { }
