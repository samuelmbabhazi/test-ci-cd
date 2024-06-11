import { PartialType } from '@nestjs/mapped-types';
import { CreateCohorteDto } from './create-cohorte.dto';

export class UpdateCohorteDto extends PartialType(CreateCohorteDto) {}
