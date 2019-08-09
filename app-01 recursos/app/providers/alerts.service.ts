import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  
  mensaje: string;

  constructor( 
    public toastCtrl: ToastController 
    ) { }

  //  Alerta

  showToast(mensaje:string) {
    this.toastCtrl.create({
      message: mensaje,
      duration: 1000,
      position: 'bottom',
    }).then((toastData) => {
      toastData.present();
    });
  }

  /* 
  HideToast() {
    this.toastCtrl.dismiss();
  } */

}


