import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListadoService } from 'src/app/providers/listado.service';
import PostModel from 'src/app/models/Post';
import { ModificarusuarioService } from 'src/app/providers/modificarusuario.service';
import { AlertService } from 'src/app/providers/alerts.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalles-blog',
  templateUrl: './detalles-blog.page.html',
  styleUrls: ['./detalles-blog.page.scss'],
})

export class DetallesBlogPage implements OnInit {

  elPost: PostModel;
  public registro: PostModel;
  public datosModificados: PostModel;

  // Variables para la validacion del formulario
  submitted = false;
  authForm: FormGroup;

  constructor(
    public router: Router,
    public listado: ListadoService,
    public modificarusuario: ModificarusuarioService,
    public alertService: AlertService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    // asignamos el valor de la variable del sevicio a nuestra nueva varibale tipo PostModel
    this.elPost = this.listado.postActivo;
    this.datosModificados = new PostModel(this.elPost.id, '', '', '', this.elPost.avatar);

    //Validacion del formulario
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]]
    }, {});
  }

  recuperarDatos(datos) {
    // datos guarda los tres valores del formulario
    this.submitted = true;
    //Si valida actualizamos
    if (this.authForm.invalid) {
      let mensaje = "¡Usuario no pudo ser modificado!";
      this.alertService.showToast(mensaje);
    } else {
      let mensaje = "¡Usuario modificado correctamente!";
      this.alertService.showToast(mensaje);
      // enviamos los datos  
      this.modificarusuario.modUsuario(this.datosModificados).then((res) => {
        //mandamos los nuevos datos a la funcion actualizarPantalla
        this.actualizarPantalla(datos);
        this.authForm.reset();
      })
        .catch((error) => {
          let mensaje = "¡Error al modificar el usuario!";
          this.alertService.showToast(mensaje);
        })
    }
  }

  actualizarPantalla(datos) {
    //actualizamos el elPost
    this.elPost.email = datos.email;
    this.elPost.first_name = datos.first_name;
    this.elPost.last_name = datos.last_name;
  }

  volver() {
    let listado = this.listado.listaUsuarios;
    for (let i = 0; i < listado.length; i++) {
      const element = listado[i];
      // buscar la posicion del post a modificar     
      if (listado[i].id === this.datosModificados.id) {
        //actualizamos el array y volvemos a la pantalla anterior
        listado[i].email = this.elPost.email;
        listado[i].first_name = this.elPost.first_name;
        listado[i].last_name = this.elPost.last_name;
        //volvemos a la pantalla anterior
        this.router.navigateByUrl('/listado-usuarios')
      }
    }
  }

  modificarUsuario(datos) {
    // recogemos los datos y los enviamos al servicio
  }


}