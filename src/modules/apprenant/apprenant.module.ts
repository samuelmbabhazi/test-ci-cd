import { Module } from '@nestjs/common';
import { ApprenantService } from './apprenant.service';
import { ApprenantController } from './apprenant.controller';

@Module({
  controllers: [ApprenantController],
  providers: [ApprenantService]
})
export class ApprenantModule {}
