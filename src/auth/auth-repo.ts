import { PrismaService } from "src/prisma/prisma.service";
import { Session } from "./entities/session.entity";
import { Injectable } from "@nestjs/common";


@Injectable()
export class AuthRepo {
    constructor(private prisma: PrismaService) { }



    async createSession(token: string, userId: number) {
        const session = new Session(token, userId)
        const data = { userId: session.userId, token: session.token };
        return await this.prisma.sessions.create({ data })
    }
}