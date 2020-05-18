import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'lab-tech',
    loadChildren: () => import('./lab-tech/lab-tech.module').then( m => m.LabTechPageModule)
  },
  {
    path: 'lab-data',
    loadChildren: () => import('./lab-data/lab-data.module').then( m => m.LabDataPageModule)
  },
  {
    path: 'total-blood-count',
    loadChildren: () => import('./total-blood-count/total-blood-count.module').then( m => m.TotalBloodCountPageModule)
  },
 
  {
    path: 'widal',
    loadChildren: () => import('./widal/widal.module').then( m => m.WidalPageModule)
  },
  {
    path: 'urinal-test',
    loadChildren: () => import('./urinal-test/urinal-test.module').then( m => m.UrinalTestPageModule)
  },
  {
    path: 'patient-detail',
    loadChildren: () => import('./patient-detail/patient-detail.module').then( m => m.PatientDetailPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
