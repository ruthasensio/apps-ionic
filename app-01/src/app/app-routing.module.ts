import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listado-usuarios',
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
  { path: 'detalles-blog', loadChildren: './pages/detalles-blog/detalles-blog.module#DetallesBlogPageModule' },
  { path: 'registrar', loadChildren: './pages/registrar/registrar.module#RegistrarPageModule' },
  { path: 'listado-usuarios', loadChildren: './pages/listado-usuarios/listado-usuarios.module#ListadoUsuariosPageModule' },
  { path: 'detalle-usuario', loadChildren: './pages/detalle-usuario/detalle-usuario.module#DetalleUsuarioPageModule' },
  { path: 'slider', loadChildren: './pages/slider/slider.module#SliderPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
