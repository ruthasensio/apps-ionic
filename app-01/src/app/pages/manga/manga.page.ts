import { Component, ViewChild, OnInit, OnChanges } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import MangaModel from 'src/app/models/Manga';
import { Router } from '@angular/router';
import { MangaService } from 'src/app/providers/manga.service';
import { EliminarusuarioService } from 'src/app/providers/eliminarusuario.service';
import { AlertService } from 'src/app/providers/alerts.service';


@Component({
  selector: 'app-manga',
  templateUrl: './manga.page.html',
  styleUrls: ['./manga.page.scss'],
})
export class MangaPage implements OnInit {

  
  aMangas: MangaModel[];
  page: number = 1;
  results: number = 12;
  resultsVistos: number;
  totalResults: any;

  constructor(    public router: Router,
    public manga: MangaService,
    public alertService: AlertService) { }

  ngOnInit() {

    this.manga.recogiendoMangas()
    .then((res) => {
      this.aMangas = res
      console.log("datos recibidos")

      })
    .catch((err) => {
      console.log("error al recibir los datos")
    });


  }

  
}
