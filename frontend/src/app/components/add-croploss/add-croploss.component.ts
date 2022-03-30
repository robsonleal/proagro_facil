import { Component, OnInit } from '@angular/core';
import { Croploss } from 'src/app/models/croploss.model';
import { CroplossService } from 'src/app/services/croploss.service';

@Component({
  selector: 'app-add-croploss',
  templateUrl: './add-croploss.component.html',
  styleUrls: ['./add-croploss.component.css']
})
export class AddCroplossComponent implements OnInit {
  croploss: Croploss = {
    farmer_name: '',
    farmer_email: '',
    farmer_cpf: '',
    crop_lat: 0,
    crop_long: 0,
    crop_type: '',
    harvest_date: '',
    event_croploss: '',
  };
  submitted = false;
  constructor(private croplossService: CroplossService) { }
  ngOnInit(): void {
  }
  saveCroploss(): void {
    const data = {
      farmer_name: this.croploss.farmer_name,
      farmer_email: this.croploss.farmer_email,
      farmer_cpf: this.croploss.farmer_cpf,
      crop_lat: this.croploss.crop_lat,
      crop_long: this.croploss.crop_long,
      crop_type: this.croploss.crop_type,
      harvest_date: this.croploss.harvest_date,
      event_croploss: this.croploss.event_croploss,
    };
    this.croplossService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newCroploss(): void {
    this.submitted = false;
    this.croploss = {
      farmer_name: '',
      farmer_email: '',
      farmer_cpf: '',
      crop_lat: 0,
      crop_long: 0,
      crop_type: '',
      harvest_date: '',
      event_croploss: '',
    };
  }
}
