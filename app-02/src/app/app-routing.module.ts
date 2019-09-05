import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },

/*   { path: 'home',  loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'list',  loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule) }, */

  { path: 'lista-animes', loadChildren: () => import('./pages/lista-animes/lista-animes.module').then(m => m.ListaAnimesPageModule) },
  { path: '', loadChildren: './pages/detalle-animes/detalle-animes.module#DetalleAnimesPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
