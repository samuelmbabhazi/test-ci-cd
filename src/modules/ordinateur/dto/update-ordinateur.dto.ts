import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdinateurDto } from './create-ordinateur.dto';

export class UpdateOrdinateurDto extends PartialType(CreateOrdinateurDto) {}
