import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserController } from './user.controller';
import { AppService } from 'src/app.service';


@Module({
   
    controllers: [UserController],
    providers: [UserService, AppService],  
})
export class UserModule {}
