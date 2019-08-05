import { Injectable } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import LocalizacionModel from '../models/loc/Localizacion';

@Injectable({
  providedIn: 'root'
})

export class GeolocationService {
 
  lat: number;
  lon: number;
  coor: string;
  
  constructor(
    public geolocation: Geolocation, 

  ) { }

  revisarLocalizacion() {
    console.log('Reconocido!')
  }



  getCurrentPosition(): Promise<LocalizacionModel>{
    return new Promise<LocalizacionModel>((resolve, reject) => {
      this.geolocation.getCurrentPosition().then((valorDevuelto) => {
        let miLocalizacion = new LocalizacionModel(valorDevuelto.coords.latitude,valorDevuelto.coords.longitude);
        resolve(miLocalizacion);

      }).catch((error) => {
        reject(error);

      });

    });

  }
 


/* 
 
   this.geolocation.getCurrentPosition().then((datos) => {
    console.log('ok');
    datos.coords.latitude;
    datos.coords.longitude;
   }).catch((error) => {
    console.log('No se puede acceder a las coordenadas');
   });
   
   let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {
    this.lat = data.coords.latitude
    this.lon = data.coords.longitude
    this.coor = `${this.lat} ,${this.lon}`
   }); 
 */


  /*   getGeolocation() {
      this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
        this.lat = geoposition.coords.latitude;
        this.lon = geoposition.coords.longitude;
        this.coor = '${this.lat}, ${this.lon}'
        return this.coor
      });
    } */

}
