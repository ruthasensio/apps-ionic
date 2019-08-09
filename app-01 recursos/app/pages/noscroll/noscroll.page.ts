import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/providers/usuarios.service';

@Component({
  selector: 'app-noscroll',
  templateUrl: './noscroll.page.html',
  styleUrls: ['./noscroll.page.scss'],
})


export class NoscrollPage {

  aUsuarios: any
  constructor( public usuariosService: UsuariosService ) { }
/* 
  getUsuarios() {
    this.usuariosService.getUsuarios()
      .then((res) => {
        this.aUsuarios = res;
        console.log(this.aUsuarios)
      })
      .catch((err) => {
        console.dir('error!:')
      })
  } */

}