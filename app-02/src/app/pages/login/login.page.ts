import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/providers/api.service';



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
    public api: ApiService
  ) { }


  ngOnInit() {

    // Validador del formulario
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      passw: ['', [Validators.required]]
    }, {});

  }

  
/*   acceso() {
    this.api.login()
      .then((res) => {
        console.log(res)
      });
  } */

  accesoHome() {
    this.navCtrl.navigateRoot('home');
  }



}
