import { Injectable } from '@angular/core';
import { Globalization } from '@ionic-native/globalization/ngx';
import GlobalizationModel from '../models/loc/Global';
import ExtraModel from '../models/loc/Extra';
import { reject } from 'q';



@Injectable({
  providedIn: 'root'
})
export class GlobalizationService {

  constructor(
    private globalization: Globalization
    ) { }


/* Función para encontrar el idioma por defecto */
  infoLanguage(): Promise<GlobalizationModel> {
    return new Promise <GlobalizationModel> ( (resolve) => {
      this.globalization.getPreferredLanguage()
      .then((info) => {
        let miInfo = new GlobalizationModel(info.value);
        resolve(miInfo);
      } )
    })

  }


  infoExtra():  Promise <ExtraModel> {
    return new Promise <ExtraModel> ((resolve) => {
      this.globalization.getFirstDayOfWeek()
      .then((extra) => {
        let miExtra = new ExtraModel(extra.value); 
        resolve(miExtra);
      })
      .catch((err) => {
        reject(err);
      } )
    })
  }


}
