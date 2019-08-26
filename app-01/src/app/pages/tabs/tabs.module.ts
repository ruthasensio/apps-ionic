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
      { path: 'socialshare', loadChildren: '../socialshare/socialshare.module#SocialsharePageModule' },
      { path: 'audio', loadChildren: '../audio/audio.module#AudioPageModule' },
      { path: 'video', loadChildren: '..//video/video.module#VideoPageModule' }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/audio',
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