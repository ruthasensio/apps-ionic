import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NoscrollPage } from './noscroll.page';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: NoscrollPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Http, 
    HttpClient,
    IonicModule,    
    RouterModule.forChild(routes)
  ],
  declarations: [NoscrollPage]
})
export class NoscrollPageModule {}
