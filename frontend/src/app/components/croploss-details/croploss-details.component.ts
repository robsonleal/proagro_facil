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

  submitted = false;
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

  updateCroploss(): void {
    this.message = '';
    this.croplossService.update(this.currentCroploss.id, this.currentCroploss)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
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
