import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ficha-anime',
  templateUrl: './ficha-anime.page.html',
  styleUrls: ['./ficha-anime.page.scss'],
})
export class FichaAnimePage implements OnInit {

    animeActivo = this.api.animeActivo;
    constructor(public api: ApiService,     
    public navCtrl: NavController
            ) { }

  ngOnInit() {
    
  }

  back(){ this.navCtrl.navigateRoot('list'); }
}
