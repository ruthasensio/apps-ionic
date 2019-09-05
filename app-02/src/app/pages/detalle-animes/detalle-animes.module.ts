import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetalleAnimesPage } from './detalle-animes.page';

const routes: Routes = [
  {
    path: 'detalleanimes',
    component: DetalleAnimesPage,
    children: [
      { path: 'ficha-anime', loadChildren: '../ficha-anime/ficha-anime.module#FichaAnimePageModule' },
      { path: 'galeria', loadChildren: '../galeria/galeria.module#GaleriaPageModule' },
      { path: 'multimedia', loadChildren: '../multimedia/multimedia.module#MultimediaPageModule' }
    ]
  },
  {
    path: '',
    redirectTo: '/detalleanimes/ficha-anime',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalleAnimesPage]
})
export class DetalleAnimesPageModule {}
