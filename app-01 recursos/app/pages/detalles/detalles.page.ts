import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/providers/usuarios.service';
import DatosModel from 'src/app/models/loc/Datos';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})

export class DetallesPage implements OnInit {

  elUsuario: DatosModel;

  constructor(private activeRoute: ActivatedRoute, public usuarios: UsuariosService) {
  }

  ngOnInit() {
    this.infoUsuarioActivo()
  }

  infoUsuarioActivo() {
    this.elUsuario = this.usuarios.usuarioActivo;
  }

}
