import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CohorteService } from './cohorte.service';
import { Cohorte as CohorteModel } from '@prisma/client';

@Controller('cohorte')
export class CohorteController {
  constructor(private readonly cohorteService: CohorteService) {}

  @Post()
  create(@Body() data: CohorteModel) {
    return this.cohorteService.create(data);
  }

  @Get()
  findAll() {
    return this.cohorteService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.cohorteService.findOne(code);
  }

  @Patch(':code')
  update(@Param('code') code: string, @Body() data: CohorteModel) {
    return this.cohorteService.update(code, data);
  }

  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.cohorteService.remove(code);
  }
}
