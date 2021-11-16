import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMedication } from 'src/app/interfaces/medication';
import { IReminder } from "src/app/interfaces/reminder";
import { MedicationService } from 'src/app/services/medication.service';

@Component({
  selector: 'app-medication-form',
  templateUrl: './medication-form.component.html',
  styleUrls: ['./medication-form.component.css']
})
export class MedicationFormComponent implements OnInit {

  @HostBinding("class") classes= "row";
  medication: IMedication = {
    name: "",
    type: "",
    image: "",
    desciption: "",
    reminder: []
  }

  edit: boolean = false;

  constructor(private medicationService: MedicationService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params) {
      this.medicationService.getMedication(params['id'])
      .subscribe (
        res =>  {
          console.log(res);
          this.medication= res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }

  saveNewMedication(){

    this.medicationService.saveMedication(this.medication)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/medication"]);
      },
      err => console.log(err)
    )
  }

  updateMedication() {
    this.medicationService.updateMedication(this.medication['id'], this.medication);
      
  }

}

