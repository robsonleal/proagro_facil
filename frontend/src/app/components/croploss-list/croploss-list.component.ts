import { Component, OnInit } from '@angular/core';
import { Croploss } from 'src/app/models/croploss.model';
import { CroplossService } from 'src/app/services/croploss.service';

@Component({
  selector: 'app-croploss-list',
  templateUrl: './croploss-list.component.html',
  styleUrls: ['./croploss-list.component.css']
})
export class CroplossListComponent implements OnInit {
  croploss?: Croploss[];
  currentCroploss: Croploss = {};
  currentIndex = -1;
  farmer_name = '';
  constructor(private croplossService: CroplossService) { }
  ngOnInit(): void {
    this.retrieveCroploss();
  }
  retrieveCroploss(): void {
    this.croplossService.getAll()
      .subscribe(
        data => {
          this.croploss = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveCroploss();
    this.currentCroploss = {};
    this.currentIndex = -1;
  }
  setActiveCroploss(croploss: Croploss, index: number): void {
    this.currentCroploss = croploss;
    this.currentIndex = index;
  }
  removeAllCroploss(): void {
    this.croplossService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
  searchTitle(): void {
    this.currentCroploss = {};
    this.currentIndex = -1;
    this.croplossService.findByTitle(this.farmer_name)
      .subscribe(
        data => {
          this.croploss = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
