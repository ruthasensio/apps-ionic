import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Globalization } from '@ionic-native/globalization/ngx';

import LocalizacionModel from '../models/localizacion';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  idiomaD: any; 

  constructor(
    private geolocation: Geolocation,
    private globalization: Globalization
  ) { }

  geolocalizacion(): Promise<LocalizacionModel> {
    return new Promise<LocalizacionModel>((resolve, reject) => {
      this.geolocation.getCurrentPosition()
        .then((res) => {
          //Guardamos los datos en una variable
          let infoPosicion = new LocalizacionModel(res.coords.latitude, res.coords.longitude, res.coords.altitude, res.coords.speed )
          resolve(infoPosicion);
        })
        .catch((err) => {
          reject(err);
        }
        )

    })
  }

  idioma() {
    this.idiomaD = this.globalization.getPreferredLanguage();
    return (this.idiomaD)
  }



  /* EJEMPLO PROMESA */
  /* 
    nombrefuncion(): Promise<NombreModelo> {
      return new Promise<NombreModelo>((resolve, reject) => {
        //Lo que hacemos
          .then((res) => {
            //lo que queremos
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          }
          )
  
      })
   */
}



