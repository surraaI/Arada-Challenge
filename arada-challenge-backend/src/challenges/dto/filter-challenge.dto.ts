import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { challenges } from "../challenges.enum";

export class getChallengesFilterDto{

    @IsOptional()
    @IsIn([challenges.Esat,challenges.kurt])
challenges:challenges

}