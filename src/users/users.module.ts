import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepo } from './users-repo';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from 'src/auth/auth.service';
import { AuthRepo } from 'src/auth/auth-repo';

@Module({
  imports: [PrismaModule, AuthModule],
  exports: [UsersModule, UsersService, UsersRepo],
  controllers: [UsersController],
  providers: [UsersService, AuthRepo, UsersRepo, AuthService],
})
export class UsersModule {}
