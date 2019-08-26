import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { GeolocalizacionService } from 'src/app/providers/geolocalizacion.service';
import { AlertService } from '../../providers/alerts.service';
import { GlobalizationService } from 'src/app/providers/globalization.service';
import { Globalization } from '@ionic-native/globalization/ngx';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { StorageService } from '../../providers/storage.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  coor: any;
  lat: number;
  lon: number;
  mensaje: string;
  language: any;
  extra: string;

  constructor(
    public geolocation: Geolocation,
    public geo: GeolocalizacionService,
    public alertService: AlertService,
    public global: GlobalizationService,
    public globalization: Globalization,
    public menu: MenuController,
    public modalController: ModalController,
    public storage: StorageService
  ) { }

  ngOnInit() {
    // Activamos el menu lateral
    this.menu.enable(true);

    // Revisamos el LS y si es la primera vez que se accede abrimos la modal de info
    this.storage.revisarStorage();
    if (this.storage.revisarStorage() == false) {
      this.openModal()
    } 

    /*  Coordenadas longitud y latitud  */
    this.geo.encontrandoLocalizacion()
      .then((misCoordenadas) => {
        this.coor = `${misCoordenadas.lat}, ${misCoordenadas.lon}`
        this.mensaje = "Todo bien";
        this.alertService.showToast(this.mensaje);
      })
      .catch((err) => {
        this.mensaje = "No se pueden encontrar las coordenadas, está desactivada la opción de geolocalización";
        this.alertService.showToast(this.mensaje);
      })

    /* Idioma por defecto del dispositivo
    this.global.infoLanguage()
      .then((miInfo) => {
        this.language = miInfo.language
      }) */

    /* Extra del dispositivo */
    this.global.infoExtra()
      .then((miExtra) => {
        console.dir('seria:' + miExtra)
        this.extra = miExtra.extra;
      })
      .catch((err) => {
        this.mensaje = "No se pueden encontrar";
        this.alertService.showToast(this.mensaje);
      });


    /*  OTROS CODIGOS NO UTILIZADOS  */
    /* GEOLOCALIZADOR DIRECTAMENTE EN LA PÁGINA */
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
        });  */

    /* OPCION RECORTADA*/
    /*     this.geolocation.getCurrentPosition()
          .then((geoposition: Geoposition) => {
            this.lat = geoposition.coords.latitude;
            this.lon = geoposition.coords.longitude;
            this.coor = `${this.lat} ,${this.lon} `
          }); */

  }

  async openModal() {
    this.storage.saveStorage('primerAcceso', true);
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

}




