import { PartialType } from '@nestjs/mapped-types';
import { CreateIptrackDto } from './create-iptrack.dto';

export class UpdateIptrackDto extends PartialType(CreateIptrackDto) {}
