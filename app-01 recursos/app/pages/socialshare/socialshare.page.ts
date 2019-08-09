import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AlertService } from 'src/app/providers/alerts.service';


@Component({
  selector: 'app-socialshare',
  templateUrl: './socialshare.page.html',
  styleUrls: ['./socialshare.page.scss'],
})
export class SocialsharePage implements OnInit {

  text = 'Check out the Ionic Academy!';
  url = 'https://ionicacademy.com';
  mensajeError = "¡Error al compartir!"
  constructor(
    private socialSharing: SocialSharing, 
    public alertService: AlertService
    ) { }


  // Compartir con WhatsApp
  async shareWA() {
    this.socialSharing.shareViaWhatsApp(this.text, this.url).then((res) => {
      // Success
    }).catch((e) => {
      this.alertService.showToast(this.mensajeError);
    });
  }

// Compartir con Facebook
  async shareFace() {
    this.socialSharing.shareViaFacebook(this.text, this.url).then((res) => {
      // Success
    }).catch((e) => {
      this.alertService.showToast(this.mensajeError);
    });
  }



  ngOnInit() {
  }

}
