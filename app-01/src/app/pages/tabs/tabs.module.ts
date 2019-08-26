import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'socialshare', loadChildren: './pages/socialshare/socialshare.module#SocialsharePageModule' },
      { path: 'audio', loadChildren: './pages/audio/audio.module#AudioPageModule' },

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/socialshare',
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
  declarations: [TabsPage]
})
export class TabsPageModule { }

/* { path: 'socialshare', loadChildren: './pages/socialshare/socialshare.module#SocialsharePageModule' },
 */