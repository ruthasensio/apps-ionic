import { Injectable } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import LocalizacionModel from '../models/loc/Localizacion';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacionService {

  constructor(
    public geolocation: Geolocation
  ) { }


  encontrandoLocalizacion(): Promise<LocalizacionModel> {
    return new Promise<LocalizacionModel>((resolve, reject) => {
      this.geolocation.getCurrentPosition()
        .then((coordenadas) => {
          let misCoordenadas = new LocalizacionModel(coordenadas.coords.latitude, coordenadas.coords.longitude);
          resolve(misCoordenadas);
        })
        .catch((err) => {
          reject(err);
        }
        )

    })

  }



}
