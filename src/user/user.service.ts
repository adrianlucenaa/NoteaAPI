import { Injectable } from "@nestjs/common";

import { User, Prisma } from "@prisma/client";
import { AppService } from "../app.service";

@Injectable()
export class UserService {
    constructor(private prisma: AppService ) {}   
    /**
     * 
     * @param userWhereUniqueInput id
     * @returns the user witj id
     */
    async getUserById(
        userWhereUniqueInput: Prisma.UserWhereUniqueInput
    ):Promise<User | null> {
        return this.prisma.user.findUnique({
             where: userWhereUniqueInput
         });
    }

    async getAllUsers(params:{
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<User[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.user.findMany({
            skip,take,cursor,where,orderBy
        })
    }
    
    
    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({
            data
        });
    }
    async deleteUser(
        where: Prisma.UserWhereUniqueInput
    ): Promise<User> {
        return this.prisma.user.delete({
            where
        });
        
    }

    async updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User> {
        const { where, data } = params;
        return this.prisma.user.update({
            data,
            where,
        });
    }
}