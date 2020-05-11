import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {SidebarComponent} from './core/sidebar/sidebar.component';
import {AdminLayoutComponent} from './core/layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './core/layouts/auth-layout/auth-layout.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {FooterComponent} from './core/footer/footer.component';
import {PageNotFoundComponent} from './shared/pages/page-not-found/page-not-found.component';
import {AuthModule} from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    FooterComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
