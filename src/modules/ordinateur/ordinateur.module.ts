import { Module } from '@nestjs/common';
import { OrdinateurService } from './ordinateur.service';
import { OrdinateurController } from './ordinateur.controller';

@Module({
  controllers: [OrdinateurController],
  providers: [OrdinateurService]
})
export class OrdinateurModule {}
