import { Component, ViewChild, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/providers/usuarios.service';
import DatosModel from 'src/app/models/loc/datos';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { TargetLocator } from 'selenium-webdriver';


@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.page.html',
  styleUrls: ['./usuarios-lista.page.scss'],
})

export class UsuariosListaPage implements OnInit {  
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  aUsuarios: DatosModel[];
  page: number = 1;
  limit: number = 8;
  maxPages: number = 10;

  constructor( private router: Router, public usuarios: UsuariosService ) {   }

  ngOnInit() {
 /*    RECOGIDA DE USUARIOS OK */
     this.usuarios.getUsuarios(this.page,this.limit, this.maxPages)
      .then((res) => {

        this.aUsuarios = res;
        // lista de usuarios guardada en -aUsuario-s
      })
      .catch((err) => {
        console.log("error al recibir los datos")
      });
  }

    loadData(event) {

      this.page ++;
      this.usuarios.getUsuarios(this.page, this.limit, this.maxPages)
       .then((res) => {
        this.aUsuarios = this.aUsuarios.concat(res);
        event.target.complete();         
       })
       .catch((err) => {
         console.log("error al recibir los datos")
       });      

       if (this.page == this.maxPages) {
        event.target.disabled = true;
       }
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  verDetalle(item){
  /* Busco en el array el elemento en el que he hecho click -> item me lo traigo como parametro */
  
   let elementoSeleccionado = new DatosModel( item.gender, item.name, item.last, item.picture )
   //console.log(elementoSeleccionado)

   this.usuarios.usuarioActivo = elementoSeleccionado;
 
  // Vamos a la pagina de Detalles
   this.router.navigateByUrl('/detalles');
  }

}

