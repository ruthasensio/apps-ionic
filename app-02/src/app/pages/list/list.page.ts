import { Component, ViewChild, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import AnimesModel from 'src/app/models/animes';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {

 @ViewChild(IonInfiniteScroll,{static:false}) infiniteScroll: IonInfiniteScroll;  
 
  cantidad: number = 10;
  inicio: number = 0;
  listaAnimes: AnimesModel[]; // Array con todo el listado 
  animesVacio: AnimesModel[];
  totalAnimes: number;
  urlAnimes = "https://kitsu.io/api/edge/anime";
  selectorCategorias: string = '';

  constructor(
    public api: ApiService,  
    public navCtrl: NavController
    ) {
  }

  ngOnInit() {

    // Recogemos el total de animes
    this.api.total(this.urlAnimes)
      .then((res) => {
        this.totalAnimes = res.meta.count;
      })

    // Recogemos la primera página de animes
    this.api.pedirAnimes(this.urlAnimes, this.cantidad, this.inicio)
      .then((res) => {
        this.listaAnimes = res;
      })
  }

  // Cargamos nuevos datos en el scroll infinito
  loadData(event) {
    setTimeout(() => {
      this.inicio = 10+this.inicio;
      this.api.pedirAnimes(this.urlAnimes, this.cantidad, this.inicio)
        .then((res) => {
          this.listaAnimes = this.listaAnimes.concat(res);
        })
      event.target.complete();

      if (this.listaAnimes.length >= this.totalAnimes) {
        event.target.disabled = true;
      }
    }, 500);
  }

  // Infinite Scroll
   toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  } 

  cargarCategoria() {
    //vaciamos la lista
    this.listaAnimes = this.animesVacio;
     // Recogemos la primera página de animes
     this.api.pedirAnimesCat(this.urlAnimes, this.cantidad, this.inicio, this.selectorCategorias)
     .then((res) => {
       this.listaAnimes = res;
     })
  }

  verDetalle(item) {
    this.api.animeActivo = item;
    this.navCtrl.navigateRoot('detalleanimes/ficha-anime');
  }

  buscar(datos:string) {
    let busqueda = '?filter[text]=$'+datos

    console.log(busqueda)
      //vaciamos la lista
      this.listaAnimes = this.animesVacio;
      // Recogemos la primera página de anime
      this.api.buscarAnimes(this.urlAnimes, busqueda)
      .then((res) => {
        this.listaAnimes = res;
      })
      //Desactivamos el Scroll
      this.infiniteScroll.disabled = true; 
     }

}
