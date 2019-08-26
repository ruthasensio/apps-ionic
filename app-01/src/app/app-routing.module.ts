import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
  { path: 'detalles', loadChildren: './pages/detalles/detalles.module#DetallesPageModule' },
  { path: 'usuarios-lista', loadChildren: './pages/usuarios-lista/usuarios-lista.module#UsuariosListaPageModule' },
  { path: 'blog', loadChildren: './pages/blog/blog.module#BlogPageModule' },
  { path: 'detalles-blog', loadChildren: './pages/detalles-blog/detalles-blog.module#DetallesBlogPageModule' },
  { path: 'registrar', loadChildren: './pages/registrar/registrar.module#RegistrarPageModule' },
  { path: 'listado-usuarios', loadChildren: './pages/listado-usuarios/listado-usuarios.module#ListadoUsuariosPageModule' },
  { path: 'detalle-usuario', loadChildren: './pages/detalle-usuario/detalle-usuario.module#DetalleUsuarioPageModule' },
  { path: 'slider', loadChildren: './pages/slider/slider.module#SliderPageModule' },
  { path: 'manga', loadChildren: './pages/manga/manga.module#MangaPageModule' },      
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' }
/*   { path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' }, */
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
