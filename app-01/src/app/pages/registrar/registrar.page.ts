import { Component, OnInit } from '@angular/core';
import PostModel from 'src/app/models/Post';
import { ListadoService } from 'src/app/providers/listado.service';
import { NuevousuarioService } from 'src/app/providers/nuevousuario.service';
import { AlertService } from 'src/app/providers/alerts.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  //Variables para el GET
  aPost: PostModel[];
  page: number = 1;
  results: number = 80;

  //Variables para el POST
  public registro: PostModel;
  constructor(public listado: ListadoService, public nuevousuario: NuevousuarioService, public alertService: AlertService) { }

  ngOnInit() {
    this.aPost = this.listado.listaUsuarios;
    this.registro = new PostModel(0, '', '', '', '');
/*     this.mostrarListaUsuarios();  */  }

  //recogemos los datos para el nuevo usuario
  async enviarUsuario() {
    await this.nuevousuario.getUsuarios(this.registro).then((res) => {
      // añadimos (concat) el resultado del POST a nuestro listado; 
      //tambien podriamos sacar los datos de this.registro
      this.aPost = this.aPost.concat(res);

      // vaciar el formulario
      this.registro.email = '';
      this.registro.first_name = '';
      this.registro.last_name = '';
      let mensaje = "¡Usuario añadido correctamente!";
      this.alertService.showToast(mensaje);
      this.listado.listaUsuarios = this.aPost;
      console.log(this.listado.listaUsuarios)
    })
      .catch((error) => {
        let mensaje = "¡Error al añadir el nuevo usuario!";
        this.alertService.showToast(mensaje);
      })


  }

  async mostrarListaUsuarios() {
    this.listado.recogiendoPost(this.page, this.results)
      .then((res) => {
        this.aPost = res;
      })
      .catch((error) => {
        //error
      })
  }

}
