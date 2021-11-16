import { Component, HostBinding, OnInit } from '@angular/core';
import { MedicationService } from 'src/app/services/medication.service';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.css']
})
export class MedicationListComponent implements OnInit {

  @HostBinding("class") classes= "row";
  medication: any = [];

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.getMedications
  }

  getMedications(){
    this.medicationService.getMedications().subscribe(
      res => {
        this.medication = res;
      },
      err => console.log(err)
      )
  }

  deleteMedication(id: string) {
    this.medicationService.deleteMedication(id)
      .subscribe(
        res => {
          console.log(res)
          this.getMedications();
        },
        err => console.log(err)

      )
  }

}
