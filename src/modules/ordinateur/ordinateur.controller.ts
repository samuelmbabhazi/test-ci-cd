import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdinateurService } from './ordinateur.service';
import { Ordinateur as OrdinateurModel } from '@prisma/client';

@Controller('ordinateur')
export class OrdinateurController {
  constructor(private readonly ordinateurService: OrdinateurService) {}

  @Post()
  create(@Body() data: OrdinateurModel) {
    return this.ordinateurService.create(data);
  }

  @Get()
  findAll() {
    return this.ordinateurService.findAll();
  }

  @Get(':tag')
  findOne(@Param('tag') tag: string) {
    return this.ordinateurService.findOne(tag);
  }

  @Patch(':tag')
  update(@Param('tag') tag: string, @Body() data: OrdinateurModel) {
    return this.ordinateurService.update(tag, data);
  }

  @Delete(':tag')
  remove(@Param('tag') tag: string) {
    return this.ordinateurService.remove(tag);
  }
}
