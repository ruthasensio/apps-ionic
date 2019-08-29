import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import UsuariosModel from 'src/app/models/usuarios';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
 
  page: number = 1;
  results: number = 12;
  listaUsuarios: UsuariosModel[]; // Array con todo el listado 

  constructor( public api: ApiService ) {
      }
  

  ngOnInit() {

/*     this.api.totalPost()
    .then((resp) => {
      this.totalResults = resp;
    })
 */
  //cargamos una primera tanda de datos; despues cargará mas el scroll infinito
  this.api.pedirUsuarios(this.page, this.results)
    .then((res) => {
      this.listaUsuarios = res;
      this.resultsVistos = this.results;
    })
    .catch((error) => {
      //error
    })


  }
  
}
