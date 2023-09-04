import { HttpException, HttpStatus, Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepo } from './users-repo';
import { AuthService } from 'src/auth/auth.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
    private usersRepo: UsersRepo,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const { email } = createUserDto;
    const user = await this.findByEmail(email)

    if (user) throw new HttpException("Usuário já cadastrado", HttpStatus.CONFLICT)

    const password = await this.authService.hashPassword(createUserDto)
    const newUser = new User(email, password)

    return this.usersRepo.createUser(newUser);
  }

  async findByEmail(email: string) {
    return await this.usersRepo.findUserByEmail(email)
  }

  findAll() {
    return this.usersRepo.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
