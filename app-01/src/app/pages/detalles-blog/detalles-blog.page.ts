import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListadoService } from 'src/app/providers/listado.service';

import PostModel from 'src/app/models/Post';

@Component({
  selector: 'app-detalles-blog',
  templateUrl: './detalles-blog.page.html',
  styleUrls: ['./detalles-blog.page.scss'],
})
export class DetallesBlogPage implements OnInit {

  // Creamos la variable tipo PostModel 
  elPost: PostModel;

  constructor(private activeRoute: ActivatedRoute, public listado: ListadoService) { }

  ngOnInit() {
    // asignamos el valor de la variable del sevicio a nuestra nueva varibale tipo PostModel
    this.elPost = this.listado.postActivo;
  }

}
