import { Module } from '@nestjs/common';

import { CohorteModule } from './modules/cohorte/cohorte.module';
import { OrdinateurModule } from './modules/ordinateur/ordinateur.module';
import { ApprenantModule } from './modules/apprenant/apprenant.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [CohorteModule, OrdinateurModule, ApprenantModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
