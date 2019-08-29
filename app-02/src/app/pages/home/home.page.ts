import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/providers/info.service';
import LocalizacionModel from 'src/app/models/localizacion';
import { AlertsService } from 'src/app/providers/alerts.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

infoLatitud: number; 
infoLongitud: number; 
infoAltitud: number;
infoSpeed: number;
infoIdioma: any;

  constructor(
    public infoService: InfoService,
    public alert: AlertsService,
    public menu: MenuController
  ) { }


  ngOnInit() {

    this.alert.alerta('Acceso correcto.');
    this.menu.enable(true);


    // GEOLOCALIZACION - ALTITUD, LONGITUD, LATITUD Y VELOCIDAD
    this.infoService.geolocalizacion()
      .then((res) => {
        this.infoLatitud = Math.round(res.lat * 100) / 100; 
        this.infoLongitud = Math.round(res.lon * 100) / 100; 
        this.infoAltitud = Math.round(res.alt * 100) / 100; 
        this.infoSpeed = res.speed;
      })
      .catch((err) => {
        // error 
      })


      //GLOBAL
            this.infoService.idioma()
      let infoS = this.infoService.idioma()
      console.log(infoS)

 }

}




/* Ejemplo de isPromise */
/*
  FunctiondelServicio()
  .then((res) => {
    //lo que quieras hacer
  })
  .catch((err) => {
    //el erro que quieras
  })
  */