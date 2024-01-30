import { Controller, Get,Post,Put, Delete,Param,Body, UseInterceptors, BadRequestException, UploadedFile, Res, Patch, Query, ValidationPipe} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateChallengesDto} from './dto/create-challenge.dto';
import { ChallengesService } from './challenges.service';
import { Challenge } from './interfaces/challenge.interface';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { getChallengesFilterDto } from './dto/filter-challenge.dto';



@Controller('challenges')
export class ChallengesController {
    constructor(private readonly challengesService:ChallengesService){}
    
    @Get()
    getChallenges(@Query(ValidationPipe) filterDto:getChallengesFilterDto):Promise<Challenge[]>{
        console.log(filterDto)
        return this.challengesService.getChallenges(filterDto)

    }
    @Get(':id')
    getOne(@Param('id') id):Promise<Challenge>{
        return this.challengesService.getOne(id);

    }
    @Patch(':id')
    update(@Body() updateChallengeDto:CreateChallengesDto,@Param('id') id):Promise<Challenge>{
        return this.challengesService.update(id,updateChallengeDto)
    }

    @Delete(':id')
    delete(@Param('id') id):Promise<Challenge>{
        return this.challengesService.delete(id)
    }
    @Delete()
    deleteAll():Promise<any>{
        return this.challengesService.deleteAll()
    }

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination:"./uploads",
            filename:(req,file,cb) => {
                const name = file.originalname.split('.')[0]
                const fileExtension = file.originalname.split('.')[1]
                const newFileName = name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtension

                cb(null, newFileName)
            }
        }),
        fileFilter: (req,file,cb)=>{
            if(!file.originalname.match(/\.(jpeg|jpg|png|gif)$/)){
                return cb(null,false)

            }
            cb(null,true)

        }
    }))

    uploadData( @Body() challengeDTO:CreateChallengesDto,@UploadedFile('file') file:Express.Multer.File){
        if (!file){
            throw new BadRequestException("File is not appropriate")
        } else {

            const filePathURL = `http://localhost:3000/salons/viewImage/${file.filename}`
            this.challengesService.create(challengeDTO,filePathURL)
        }
    }
    @Get('viewImage/:filename')
    async viewTheFile(@Param('filename') filename, @Res() res:Response): Promise<void> {
        return await res.sendFile(filename,{root: './uploads'})
    } 

    

}
