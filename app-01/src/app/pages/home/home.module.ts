import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GeolocationService } from '../../providers/geolocation.service';
import { GeolocalizacionService } from 'src/app/providers/geolocalizacion.service';

import { Globalization } from '@ionic-native/globalization/ngx';
import { GlobalizationService } from 'src/app/providers/globalization.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
  providers: [ 
    Geolocation, 
    Globalization,
    GeolocationService, 
    GeolocalizacionService, 
    GlobalizationService
  ]
})
export class HomePageModule {}


