import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepo } from './users-repo';

@Module({
  exports: [UsersModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepo],
})
export class UsersModule {}
