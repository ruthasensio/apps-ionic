import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/providers/api.service';
import { LoginService } from 'src/app/providers/login.service';
import { AlertsService } from 'src/app/providers/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  authForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public api: ApiService,
    public login: LoginService,
    public alert: AlertsService
  ) { }


  ngOnInit() {
    // Validador del formulario
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      passw: ['', [Validators.required]]
    }, {});
  }

  acceso(username, password) {
    this.login.login(username, password)
      .then((res) => {
          this.navCtrl.navigateRoot('home'); 
          this.alert.alerta('Acceso correcto.');       
          //aqui guqardamos el TOKEN
           this.api.access_token = res.access_token;
           
      })

  }


}
