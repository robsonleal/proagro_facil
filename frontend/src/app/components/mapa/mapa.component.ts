import { Component, OnInit, OnDestroy } from '@angular/core';
import * as L from "leaflet";
import { CroplossService } from 'src/app/services/croploss.service';
import { environment as env } from 'src/environments/environment';
import { Croploss } from '../../models/croploss.model';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, OnDestroy {
  map: any;
  marker: any;
  locais: Croploss[] = [];

  constructor(
    private croplossService: CroplossService
  ) { }

  ngOnInit(): void {
    this.map = L.map('mapa').setView([-29.50, -53.09], 7);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1Ijoicm9ic29ubGVhbDEwIiwiYSI6ImNsMWZxamJoYjEya2czY3BjMWxubTl1YW4ifQ.mxa6_2VWxY4sCsad0a3kgA'
    }).addTo(this.map);
    
    //this.marker = L.marker([-29.50, -53.09]).addTo(this.map);

    this.croplossService.getAll()
    .subscribe(
      dados => {
        this.locais = dados as Croploss[];
        this.adicionarMarkers();
      },
      err => alert('Erro obtendo dados dos locais, tente novamente mais tarde.')
    );
  }
  
  adicionarMarkers(){
    this.locais.forEach(element => {
      //L.marker([latitude, logitude]).addTo(this.map);
      this.marker = L.marker([element.crop_lat, element.crop_long]).addTo(this.map);
    });
  }

  ngOnDestroy() {
    this.map.invalidateSize();
  }

}
