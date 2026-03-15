import { Module } from '@nestjs/common';
import {
  MessagesController,
  RoomMessagesController,
  DmMessagesController,
} from './controllers/messages.controller';
import { MessagesService } from './services/messages.service';
import { MessagesRepository } from './repositories/messages.repository';
import { ChatGateway } from './gateways/chat.gateway';
import { RoomsModule } from '../rooms/rooms.module';
import { IamModule } from '../iam/iam.module';

@Module({
  imports: [RoomsModule, IamModule],
  controllers: [
    MessagesController,
    RoomMessagesController,
    DmMessagesController,
  ],
  providers: [MessagesService, MessagesRepository, ChatGateway],
  exports: [MessagesService],
})
export class MessagesModule {}
