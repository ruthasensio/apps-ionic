import { Component, ViewChild, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { IonInfiniteScroll } from '@ionic/angular';
import AnimesModel from 'src/app/models/animes';

@Component({
  selector: 'app-lista-animes',
  templateUrl: './lista-animes.page.html',
  styleUrls: ['./lista-animes.page.scss'],
})
export class ListaAnimesPage implements OnInit {
  /*   @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;  */
  cantidad: number = 10;
  inicio: number = 0;
  listaAnimesCat: AnimesModel[]; // Array con todo el listado 
  totalAnimes: number;
  urlAnimes = "https://kitsu.io/api/edge/anime";


  constructor(public api: ApiService, public infiniteScroll: IonInfiniteScroll) { }

  ngOnInit() {


    // Recogemos el total de animes de la categoria activa
    this.api.total(this.urlAnimes)
      .then((res) => {
        this.totalAnimes = res.meta.count;
      })

    // Recogemos la primera página de animes de la categoria activa
    this.api.pedirAnimesCat(this.urlAnimes, this.cantidad, this.inicio, this.api.categoriaActiva)
      .then((res) => {
        this.listaAnimesCat = res;
      })
  }


  
  // Cargamos nuevos datos en el scroll infinito
  loadData(event) {
    setTimeout(() => {
      this.inicio = 10+this.inicio;
      this.api.pedirAnimes(this.urlAnimes, this.cantidad, this.inicio)
        .then((res) => {
          this.listaAnimesCat = this.listaAnimesCat.concat(res);
        })
      event.target.complete();

      if (this.listaAnimesCat.length >= this.totalAnimes) {
        event.target.disabled = true;
      }
    }, 500);
  }

  // Infinite Scroll
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }



}
