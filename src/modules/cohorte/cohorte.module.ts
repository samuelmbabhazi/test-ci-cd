import { Module } from '@nestjs/common';
import { CohorteService } from './cohorte.service';
import { CohorteController } from './cohorte.controller';

@Module({
  controllers: [CohorteController],
  providers: [CohorteService]
})
export class CohorteModule {}
