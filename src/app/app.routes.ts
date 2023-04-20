import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'test1',
    loadComponent: () => import('./test1/test1.page').then( m => m.Test1Page)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'platillos',
    loadComponent: () => import('./pages/platillos/platillos/platillos.page').then( m => m.PlatillosPage)
  },
  {
    path: 'snacks',
    loadComponent: () => import('./pages/snacks/snacks/snacks.page').then( m => m.SnacksPage)
  },
  {
    path: 'postres',
    loadComponent: () => import('./pages/postres/postres/postres.page').then( m => m.PostresPage)
  },
  {
    path: 'bebidas',
    loadComponent: () => import('./pages/bebidas/bebidas/bebidas.page').then( m => m.BebidasPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'platillo',
    loadComponent: () => import('./pages/platillos/platillo/platillo.page').then( m => m.PlatilloPage)
  },

];
