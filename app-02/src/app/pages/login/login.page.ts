import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/providers/api.service';
import { LoginService } from 'src/app/providers/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  passw: string;
  authForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public api: ApiService,
    public login: LoginService
  ) { }


  ngOnInit() {

    /*  this.alumno = new Alumno();
        this.alumno.curso = null;
        this.alumno.sede = null;
        this.alumno.turno = null; */


    // Validador del formulario
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      passw: ['', [Validators.required]]
    }, {});

  }

  acceso() {
    this.login.login()
      .then((res) => {
        /*    console.log(res)
              console.log(this.login.datosLogin) */
      }).catch((err) => {
        console.log('error de conexion')
      })
  }

  accesoHome() {
    this.navCtrl.navigateRoot('home');
  }



}
