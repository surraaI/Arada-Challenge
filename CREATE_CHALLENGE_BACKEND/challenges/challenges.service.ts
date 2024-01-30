import { Injectable } from '@nestjs/common';
import {Challenge} from './interfaces/challenge.interface'
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
import { CreateChallengesDto } from './dto/create-challenge.dto';
import { getChallengesFilterDto } from './dto/filter-challenge.dto';

@Injectable()
export class ChallengesService {
    constructor(@InjectModel('Challenge') private readonly challengeModel:Model<Challenge>){}
   
    async getChallenges(filterDto:getChallengesFilterDto):Promise<Challenge[]>{
        let options={}
        const {challenges}=filterDto
        console.log(challenges)
        if (challenges){
            options={
                challenges:challenges
            }
        }
        return await this.challengeModel.find(options);
    }

    async getOne(id:string):Promise<Challenge>{
        return await this.challengeModel.findOne({_id:id});
    }

    async create(challenge:CreateChallengesDto,path:string):Promise<Challenge>{
        const newChallenge=new this.challengeModel(challenge);
        console.log(newChallenge)
        newChallenge.picturePath=path 
        return await newChallenge.save()
    }

    async delete(id:string):Promise<Challenge>{
        return await this.challengeModel.findByIdAndDelete(id);
    }

    async update (id:string,challenge:Challenge):Promise<Challenge>{
        return await this.challengeModel.findByIdAndUpdate(id,challenge,{new:true})
    }
    async deleteAll():Promise<any>{
        return await this.challengeModel.deleteMany({})

    }


}
