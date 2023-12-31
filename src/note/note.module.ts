import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';

@Module({
    controllers: [NoteController],
    providers: [NoteService, AppService],  
   
  })
export class NoteModule {}
