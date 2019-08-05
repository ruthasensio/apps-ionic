import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import PostModel from 'src/app/models/Post';
import { Router } from '@angular/router';
import { ListadoService } from 'src/app/providers/listado.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  aPost: PostModel[];
  page: number = 1;
  results: number = 6;
  resultsVistos: number;
  totalResults: any;

  constructor(public router: Router, public listado: ListadoService) { }

  ngOnInit() {

    this.listado.totalPost()
      .then((resp) => {
        this.totalResults = resp;
      })

    this.listado.recogiendoPost(this.page, this.results)
      .then((res) => {
        this.aPost = res;
        this.resultsVistos = this.results;
      })
      .catch((error) => {
        //error
      })

  }

  loadDataPost(event) {
    this.page++;
    this.listado.recogiendoPost(this.page, this.results)
      .then((res) => {
        this.resultsVistos += this.resultsVistos;
        this.aPost = this.aPost.concat(res);
        event.target.complete();         
      })
      .catch((err) => {
        console.log("error al recibir los datos")
      });   

    if (this.resultsVistos ==this.totalResults ) {
      event.target.disable = true;
    }

  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  verDetalle(item) {
    //item es el nombre de la posicion del array aPost que recorremos
    let postSeleccionado = new PostModel(item.id, item.email, item.first_name, item.last_name, item.avatar);
    this.listado.postActivo = postSeleccionado;     
    this.router.navigateByUrl('/detalles-blog')
  }

}
