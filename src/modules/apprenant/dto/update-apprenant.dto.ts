import { PartialType } from '@nestjs/mapped-types';
import { CreateApprenantDto } from './create-apprenant.dto';

export class UpdateApprenantDto extends PartialType(CreateApprenantDto) {}
