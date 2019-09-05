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

   /*  @ViewChild(IonInfiniteScroll, this.x) infiniteScroll: IonInfiniteScroll; */
   
  cantidad: number = 10;
  inicio: number = 0;
  listaAnimes: AnimesModel[]; // Array con todo el listado 
  totalAnimes: number;
  urlAnimes = "https://kitsu.io/api/edge/anime";
  pop: string = '';

  constructor(
    public api: ApiService,  
    public navCtrl: NavController
    ) {
  }

  ngOnInit() {

    // Recogemos el total de usuarios
    this.api.total(this.urlAnimes)
      .then((res) => {
        this.totalAnimes = res.meta.count;
      })

    // Recogemos la primera página de usuarios
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


  notify() {
    console.dir("selector:" + this.pop);
  }

  verDetalle(item) {
    this.api.animeActivo = item;
    this.navCtrl.navigateRoot('detalleanimes/ficha-anime');
  }

  addDetalle(item) {
    //
    
      }



}
