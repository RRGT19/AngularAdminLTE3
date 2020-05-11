import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {AdminLayoutComponent} from './core/layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './core/layouts/auth-layout/auth-layout.component';
import {AuthGuard} from "./modules/auth/guards/auth.guard";


const routes: Routes = [

  /* #################### Auth routes #################### */

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
      }
    ]
  },

  /* #################### Admin routes #################### */

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},

  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'dashboard', component: DashboardComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
