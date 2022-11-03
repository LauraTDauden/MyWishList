import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-wishes',
    loadChildren: () => import('./my-wishes/my-wishes.module').then( m => m.MyWishesPageModule)
  },
  {
    path: 'new-wish',
    loadChildren: () => import('./new-wish/new-wish.module').then( m => m.NewWishPageModule)
  },
  {
    path: 'new-wish/:id',
    loadChildren: () => import('./new-wish/new-wish.module').then( m => m.NewWishPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'logged',
    loadChildren: () => import('./you-are-logged-in/you-are-logged-in.module').then( m => m.YouAreLoggedInPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./explore/explore.module').then( m => m.ExplorePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
