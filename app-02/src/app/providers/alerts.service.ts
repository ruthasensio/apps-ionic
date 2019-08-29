import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  

  constructor(public toastController: ToastController) { }

  alerta(mensajeToast:string) {
    this.toastController.create({
      header: 'ALERTA',
      message:  mensajeToast,
      duration: 10000,
      position: 'middle',
      cssClass: "toast-alert"
    }).then((res) => {

      res.present();
    })

  }

}
