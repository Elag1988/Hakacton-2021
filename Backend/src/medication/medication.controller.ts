import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { MedicationDTO } from './dto/create_medication.dto';
import { MedicationService } from './medication.service';

@Controller('medication')
export class MedicationController {
    constructor(private readonly medicationService:MedicationService ){}

    @Get()
    async getMedications(@Res()res){
        const medications = await this.medicationService.getAllMedication();
        return res.status(HttpStatus.OK).json({
            message:'medication listed',
            data: medications            
        });  
    }
    @Get('/:medicationId')
    async getMedication(@Res() res, @Param('medicationId')id){
        const medication = await this.medicationService.getMedication(id);
        if(!medication){
            throw new NotFoundException('Student does not exists');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Medication found',
            data: medication
        });


    }

    @Post('create')
    async createNewMedication(@Res() res, @Body() createMedicationDTO:MedicationDTO  ){
        
        const medication = await this.medicationService.createMedication(createMedicationDTO);

        return res.status(HttpStatus.CREATED).json({
            message:'Medication created',
            data: medication
        });

    }
    @Put('/update/:medicationId')
    async updateMedication(  @Res() res, @Body() createMedicationDTO: MedicationDTO, @Param('medicationId') id){
        const medication = await this.medicationService.updateMedication(id, createMedicationDTO);

        if(!medication){
            throw new NotFoundException('Medication does not exists');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Medication updated',
            data: medication
        });
    }
    @Delete('/delete/:medicationId')
    async deleteMedication(  @Res() res, @Param('medicationId') id){
        const medication = await this.medicationService.deteletMedication(id);

        if(!medication){
            throw new NotFoundException('Medication does not exists');
        }
        
        return res.status(HttpStatus.OK).json({
            message: 'Medication delete',
            data: medication
        });
    }
}
