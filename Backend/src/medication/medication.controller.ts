import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { MedicationDTO } from './dto/create_medication.dto';
import { MedicationService } from './medication.service';

@Controller('medication')
export class MedicationController {
    constructor(private readonly medicationService:MedicationService ){}

    @Post('create')
    async createNewProduct(@Res() res, @Body() createMedicationDTO:MedicationDTO  ){
        
        const medication = await this.medicationService.createMedication(createMedicationDTO);

        return res.status(HttpStatus.CREATED).json({
            message:'Medication created',
            data: medication
        });

    }
}
