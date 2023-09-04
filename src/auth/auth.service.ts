import { HttpException, HttpStatus, Inject, Injectable, forwardRef } from '@nestjs/common';
import { UsersRepo } from 'src/users/users-repo';
import { SignInDTO } from './dto/sign-in.dto';
import { v4 as uuidv4 } from 'uuid';
import { AuthRepo } from './auth-repo';
import { hashSync, compareSync} from 'bcrypt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
    // private authRepo: AuthRepo
    constructor(
        @Inject(forwardRef(() => UsersRepo))
        private usersRepo: UsersRepo,
        private authRepo: AuthRepo
        ) { }

    async createSession(form: SignInDTO) {
        const token = uuidv4()
        const user = await this.validateUser(form, this.usersRepo);
        return this.authRepo.createSession(token, user.id)
    }

    async validateUser(form: SignInDTO, usersRepo: UsersRepo) {
        const user = await usersRepo.findUserByEmail(form.email);
        if (!user) throw new HttpException("Usuário não cadastrado", HttpStatus.UNAUTHORIZED);

        const newUser = new User(user.email, user.password)
        const passwordsMatch = await this.validatePassword(form, newUser);

        if(!passwordsMatch) throw new HttpException("Credenciais incorretas", HttpStatus.UNAUTHORIZED)
        return user;
    }

    async hashPassword(form: SignInDTO) {
        const { password } = form;
        const newPass = hashSync(password, 10);

        return newPass;
    }
    async validatePassword(form: SignInDTO, user: User){
        const passwordsMatch = await compareSync(form.password, user.password)
        return passwordsMatch;
    }
}
