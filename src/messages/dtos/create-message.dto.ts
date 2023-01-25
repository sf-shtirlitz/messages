import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString() //validation rule essentially
  content: string;
}
