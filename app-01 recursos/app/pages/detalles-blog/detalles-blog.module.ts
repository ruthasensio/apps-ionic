import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetallesBlogPage } from './detalles-blog.page';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: DetallesBlogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetallesBlogPage]
})
export class DetallesBlogPageModule {}
