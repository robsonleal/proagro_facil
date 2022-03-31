import { Component, OnInit } from '@angular/core';
import { CroplossService } from 'src/app/services/croploss.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Croploss } from 'src/app/models/croploss.model';

@Component({
  selector: 'app-croploss-details',
  templateUrl: './croploss-details.component.html',
  styleUrls: ['./croploss-details.component.css']
})
export class CroplossDetailsComponent implements OnInit {
  currentCroploss: Croploss = {
    farmer_name: '',
    farmer_email: '',
    farmer_cpf: '',
    crop_lat: 0,
    crop_long: 0,
    crop_type: '',
    harvest_date: '',
    event_croploss: '',
  };

  message = '';
  constructor(
    private croplossService: CroplossService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCroploss(this.route.snapshot.params['id']);
  }

  getCroploss(id: string): void {
    this.croplossService.get(id)
      .subscribe(
        data => {
          this.currentCroploss = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  /*updatePublished(status: boolean): void {
    const data = {
      farmer_name: this.currentCroploss.farmer_name,
      farmer_email: this.currentCroploss.farmer_email,
      farmer_cpf: this.currentCroploss.farmer_cpf,
      crop_lat: this.currentCroploss.crop_lat,
      crop_long: this.currentCroploss.crop_long,
      crop_type: this.currentCroploss.crop_type,
      harvest_date: this.currentCroploss.harvest_date,
      event_croploss: this.currentCroploss.event_croploss,
    };
    this.message = '';
    this.croplossService.update(this.currentCroploss.id, data)
      .subscribe(
        response => {
          this.currentCroploss.published = status;
          console.log(response);
          this.message = response.message ? response.message : 'The status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }*/

  updateCroploss(): void {
    this.message = '';
    this.croplossService.update(this.currentCroploss.id, this.currentCroploss)
    .subscribe(
      response => {
        console.log(response);
        this.message = response.message ? response.message : 'Dados atualizados com sucesso!';
      },
      error => {
        console.log(error);
      });
  }

  deleteCroploss(): void {
    this.croplossService.delete(this.currentCroploss.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/perdas']);
      },
      error => {
        console.log(error);
      });
  }
}
