import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApprenantService } from './apprenant.service';
import { Apprenant as ApprenantModel } from '@prisma/client';

@Controller('apprenant')
export class ApprenantController {
  constructor(private readonly apprenantService: ApprenantService) {}

  @Post()
  create(@Body() data: ApprenantModel) {
    return this.apprenantService.create(data);
  }

  @Get()
  findAll() {
    return this.apprenantService.findAll();
  }

  @Get(':matricule')
  findOne(@Param('matricule') matricule: string) {
    return this.apprenantService.findOne(matricule);
  }

  @Patch(':matricule')
  update(@Param('matricule') matricule: string, @Body() data: ApprenantModel) {
    return this.apprenantService.update(matricule, data);
  }

  @Delete(':matricule')
  remove(@Param('matricule') matricule: string) {
    return this.apprenantService.remove(matricule);
  }
}
