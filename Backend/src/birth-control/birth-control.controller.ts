import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { BirthControlService } from './birth-control.service';
import { BirthControlDTO } from './dto/create_birthcontrol.dto';

@Controller('birth_control')
export class BirthControlController {
    constructor(private readonly birthControlService:BirthControlService ){}

    @Get()
    async getBcontrols(@Res()res){
        const bcontrol = await this.birthControlService.getAllBControl();
        return res.status(HttpStatus.OK).json({
            message:'Birth Control listed',
            data: bcontrol            
        });  
    }
    @Get('/:bcrontrolId')
    async getBC(@Res() res, @Param('bcontrolId')id){
        const bcontrol = await this.birthControlService.getBControl(id);
        if(!bcontrol){
            throw new NotFoundException('Control does not exists');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Birth Control found',
            data: bcontrol
        });

    }

    @Post('create')
    async createNewBcontrol(@Res() res, @Body() createBirthControlDTO:BirthControlDTO  ){
        
        const bcontrol = await this.birthControlService.createBControl(createBirthControlDTO);

        return res.status(HttpStatus.CREATED).json({
            message:'Birth Control created',
            data: bcontrol
        });

    }
    @Put('/update/:bcrontrolId')
    async updateBcontrol(  @Res() res, @Body() createBirthControlDTO:BirthControlDTO , @Param('bcrontrolId') id){
        const bcontrol = await this.birthControlService.updateBControln(id, createBirthControlDTO);

        if(!bcontrol){
            throw new NotFoundException('Birth Control does not exists');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Birth Control updated',
            data: bcontrol
        });
    }
    @Delete('/delete/:bcrontrolId')
    async deleteBcontrol(  @Res() res, @Param('bcrontrolId') id){
        const bcontrol = await this.birthControlService.deteletBControl(id);

        if(!bcontrol){
            throw new NotFoundException('Birth Control does not exists');
        }
        
        return res.status(HttpStatus.OK).json({
            message: 'Birth Control delete',
            data: bcontrol
        });
    }
}
