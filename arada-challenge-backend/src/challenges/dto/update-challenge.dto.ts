import { PartialType } from '@nestjs/mapped-types';
import { CreateChallengesDto } from './create-challenge.dto';
export class UpdateChallengeDto extends PartialType(CreateChallengesDto) {}
