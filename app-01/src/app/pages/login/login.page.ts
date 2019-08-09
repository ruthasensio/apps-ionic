import { Component, OnInit } from '@angular/core';
import { ToastController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertService } from '../../providers/alerts.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  nombre: string;
  pass: string;
  nombreOk: string;
  passOk: string;
  toast: any;
  mensaje: string; 

  constructor(
    public toastCtrl: ToastController, 
    public router: Router, 
    public navCtrl: NavController,
    public alertService: AlertService,
    public menu: MenuController
    ) {
  }

  ngOnInit() {
    this.menu.enable(false);
  }

  /* comprobar si nombre y pass introducidos son iguales a los indicados */
  async clicLogear(ev: Event) {

    this.nombreOk = "Pepe";
    this.passOk = "123456";

    if (this.nombre == this.nombreOk && this.pass == this.passOk) {
      this.mensaje = "Acceso Correcto";
      this.alertService.showToast(this.mensaje);
      this.navCtrl.navigateRoot('listado-usuarios');

    } else {
      this.mensaje = "Acceso Incorrecto";
      this.alertService.showToast(this.mensaje);
      this.nombre = "";
      this.pass = "";
      this.navCtrl.navigateRoot('listado-usuarios');
    }

  }

}