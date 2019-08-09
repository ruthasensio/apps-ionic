import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModificarUsuarioPage } from './modificar-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModificarUsuarioPage]
})
export class ModificarUsuarioPageModule {}
