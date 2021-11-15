import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
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

    @Post('create')
    async createNewMedication(@Res() res, @Body() createMedicationDTO:MedicationDTO  ){
        
        const medication = await this.medicationService.createMedication(createMedicationDTO);

        return res.status(HttpStatus.CREATED).json({
            message:'Medication created',
            data: medication
        });

    }
}
