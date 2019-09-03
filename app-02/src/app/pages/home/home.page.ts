import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/providers/info.service';
import LocalizacionModel from 'src/app/models/localizacion';
import { AlertsService } from 'src/app/providers/alerts.service';
import { MenuController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/providers/api.service';
import AnimesModel from 'src/app/models/animes';
import PersonajesModel from 'src/app/models/personajes';
import { resolve } from 'q';


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

  urlAnimes = "https://kitsu.io/api/edge/anime"
  urlPersonajes = "https://kitsu.io/api/edge/characters"
  numeroRandom: number;

  slideOpts = { initialSlide: 1, speed: 400, height: 100, slidesPerView: 3 };
  cantidad = 20;
  inicio = 10;
  listaNovedades: AnimesModel[];
  listaPersonajes: PersonajesModel[];
  totalPersonajes: number;
  randomPersonajes: number;
  tres = 3;

  constructor(
    public infoService: InfoService,
    public alert: AlertsService,
    public menu: MenuController,
    public api: ApiService,
    public navCtrl: NavController
  ) { }


  ngOnInit() {

    this.alert.alerta('Acceso correcto.');
    this.menu.enable(true);


    // RECOGEMOS EL TOTAL DE PERSONALES PARA SACAR UN NUMERO ALEATORIO ENTRE TODOS LOS EXISTENTES
    this.api.total(this.urlPersonajes)
      .then((res) => {
        this.totalPersonajes = res.meta.count;
        this.randomPersonajes = Math.random() * (this.totalPersonajes - 1) + 1;
        this.randomPersonajes = Math.round(this.randomPersonajes);
        return this.randomPersonajes
      });

    // PEDIR LISTADO DE PERSONAJES
    this.api.pedirPersonajes(this.urlPersonajes, this.tres, this.randomPersonajes)
      .then((res) => {
        this.listaPersonajes = res;
      });


    // PEDIR LISTADO DE NOVEDADES
    this.api.pedirAnimes(this.urlAnimes, this.cantidad, this.inicio)
      .then((res) => {
        this.listaNovedades = res;
      });

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
      });

    //GLOBAL
    this.infoService.idioma()
    let infoS = this.infoService.idioma()

  }





  /* ACCESOS A CATEGORIAS*/
  
  comedia() {
    //ir a comedia
    this.api.categoriaActiva = 'comedy';
    this.navCtrl.navigateRoot('home');
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