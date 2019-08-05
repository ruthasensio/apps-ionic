import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  { path: 'scroll', loadChildren: './pages/scroll/scroll.module#ScrollPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'socialshare', loadChildren: './pages/socialshare/socialshare.module#SocialsharePageModule' },
  { path: 'audio', loadChildren: './pages/audio/audio.module#AudioPageModule' },
  { path: 'detalles', loadChildren: './pages/detalles/detalles.module#DetallesPageModule' },
  { path: 'usuarios-lista', loadChildren: './pages/usuarios-lista/usuarios-lista.module#UsuariosListaPageModule' },
  { path: 'blog', loadChildren: './pages/blog/blog.module#BlogPageModule' },
  { path: 'detalles-blog', loadChildren: './pages/detalles-blog/detalles-blog.module#DetallesBlogPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
