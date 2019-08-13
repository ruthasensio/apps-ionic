import { Component, ViewChild, OnInit, OnChanges } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import PostModel from 'src/app/models/Post';
import { Router } from '@angular/router';
import { ListadoService } from 'src/app/providers/listado.service';
import { EliminarusuarioService } from 'src/app/providers/eliminarusuario.service';
import { AlertService } from 'src/app/providers/alerts.service';


@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.page.html',
  styleUrls: ['./listado-usuarios.page.scss'],
})
export class ListadoUsuariosPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  aPost: PostModel[];
  page: number = 1;
  results: number = 12;
  resultsVistos: number;
  totalResults: any;

  constructor(
    public router: Router,
    public listado: ListadoService,
    public eliminar: EliminarusuarioService,
    public alertService: AlertService
  ) { }

  ionViewDidEnter() {
console.log(this.listado.listaUsuarios)
    //revisamos si hay datos en el array (con modificaciones), si está vacío cargamos los datos del API
  }

  ngOnInit() {
       this.listado.totalPost()
      .then((resp) => {
        this.totalResults = resp;
      })

    //cargamos una primera tanda de datos; despues cargará mas el scroll infinito
    this.listado.recogiendoPost(this.page, this.results)
      .then((res) => {
        this.aPost = res;
        this.resultsVistos = this.results;
      })
      .catch((error) => {
        //error
      })
   
  }

  //cargamos mas datos del API con scroll infinito
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

    if (this.resultsVistos == this.totalResults) {
      event.target.disable = true;
    }

  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  // Funcion para ver detalle del usuario
  verDetalle(item) {
    //item es el nombre de la posicion del array aPost que recorremos
    let postSeleccionado = new PostModel(item.id, item.email, item.first_name, item.last_name, item.avatar);
    this.listado.postActivo = postSeleccionado;
    this.router.navigateByUrl('/detalle-usuario')
  }

  // Funcion para eliminar un usuario
  eliminarUsuario(item) {
    this.actualizarListado(item);
    this.eliminar.eliminarUsuarios(item.id).then((res) => {
      let mensaje = "¡Usuario eliminado correctamente!";
      this.alertService.showToast(mensaje);
    })
      .catch((error) => {
        let mensaje = "¡Error al eliminar el usuario!";
        this.alertService.showToast(mensaje);
      })
  }

  // Funcion para actualizar el listado despues de eliminar 
  actualizarListado(item) {
    //eliminamos el item seleccionado del array
    let posicion = this.aPost.indexOf(item)
    this.aPost.splice(posicion, 1);
    return (this.aPost)
  }

  // Funcion para modificar un usuario
  modificarUsuario(item) {
    //enviar el [] de la lista y guardarlos en listaUsuarios en el servicio
    this.listado.listaUsuarios = this.aPost;
    //item es el nombre de la posicion del array aPost que recorremos
    let postSeleccionado = new PostModel(item.id, item.email, item.first_name, item.last_name, item.avatar);
    this.listado.postActivo = postSeleccionado;
    this.router.navigateByUrl('/detalles-blog')
  }

  //Funcion para añadir nuevo usuario
  nuevoUsuario() {
    this.listado.listaUsuarios = this.aPost;
    this.router.navigateByUrl('/registrar')
  }

}
