import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListadoService } from 'src/app/providers/listado.service';
import PostModel from 'src/app/models/Post';


@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.page.html',
  styleUrls: ['./detalle-usuario.page.scss'],
})
export class DetalleUsuarioPage implements OnInit {

  elPost: PostModel;
  public registro: PostModel;


  constructor(
    private activeRoute: ActivatedRoute,
    public listado: ListadoService
  ) { }

  ngOnInit() {

    // asignamos el valor de la variable del sevicio a nuestra nueva varibale tipo PostModel
    this.elPost = this.listado.postActivo;


  }

}
