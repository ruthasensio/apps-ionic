import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListadoService } from 'src/app/providers/listado.service';
import PostModel from 'src/app/models/Post';
import { ModificarusuarioService } from 'src/app/providers/modificarusuario.service';
import { AlertService } from 'src/app/providers/alerts.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.page.html',
  styleUrls: ['./modificar-usuario.page.scss'],
})

export class ModificarUsuarioPage implements OnInit {

  // Creamos la variable tipo PostModel 
  elPost: PostModel;
  datosNuevos: any;


  // Variables para la validacion del formulario
  submitted = false;
  authForm: FormGroup;

  //Variables para el POST
  public registro: PostModel;
  public datosModificados: PostModel;

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
    
    //Iniciamos el validador del formulario
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]]
    }, {});

  }

  recuperarDatos(datos) {
    let validacion = datos;
    this.submitted = true;
    let nuevoEmail: string;
/*     nuevoEmail = this.datosNuevos.email 
 */    console.log('dfdfg') 
    
 /* 
    if (this.authForm.valid) {
      let mensaje = "¡Usuario modificado correctamente!";
      this.alertService.showToast(mensaje);

      //Vaciamos el formulario y cambiamos el estado del submitt
      // this.authForm.reset(); 
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

      setTimeout(function () {
        this.submitted = false;
      }, 3000);
    } */

  }

}