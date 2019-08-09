import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegistrarPage } from './registrar.page';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: '',
    component: RegistrarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrarPage]
})
export class RegistrarPageModule {}
