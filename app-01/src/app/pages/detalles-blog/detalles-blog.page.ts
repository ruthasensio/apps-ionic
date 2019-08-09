import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private activeRoute: ActivatedRoute,
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
    // enviamos los datos  
    this.enviamosDatos(datos);
  }


  enviamosDatos(datos) {
    // Promesa del Post si el formulario está validado
    this.modificarusuario.modUsuario(this.datosModificados).then((res) => {
      //mandamos los nuevos datos a la funcion actualizarPanralla
      this.actualizarPantalla(datos);
    })
      .catch((error) => {
        let mensaje = "¡Error al modificar el usuario!";
        this.alertService.showToast(mensaje);
      })

  }


  actualizarPantalla(datos) {
    //actualizamos el elPost
    this.elPost.email = datos.email;
    this.elPost.first_name = datos.first_name;
    this.elPost.last_name = datos.last_name;
  }

  volver() {
    //actualizamos el array y volvemos a la pantalla anterior

  }



  modificarUsuario(datos) {
    // recogemos los datos y los enviamos al servicio
  }


  /*   recuperarDatos(datos) {
      let validacion = datos
      console.log(validacion)
      this.submitted = true;
      
  
      if (this.authForm.valid) {
        let mensaje = "¡Usuario modificado correctamente!";
        this.alertService.showToast(mensaje);
        //this.authForm.reset();
        this.submitted = false;
  
        // Promesa del Post si el formulario está validado
        this.modificarusuario.modUsuario(this.datosModificados).then((res) => {
          //actualizar en pantalla
          this.elPost = this.datosModificados;
        })
          .catch((error) => {
            let mensaje = "¡Error al modificar el usuario!";
            this.alertService.showToast(mensaje);
          })
  
      } else if (this.authForm.invalid) {
        let mensaje = "¡Usuario NO modificado! Revisa los campos e intentalo de nuevo.";
        this.alertService.showToast(mensaje);
      }
  
    } */

}