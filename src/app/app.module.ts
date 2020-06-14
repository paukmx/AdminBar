import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';

// RUTAS
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { AddEmployComponent } from './pages/add-employ/add-employ.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AlcoholicasComponent } from './pages/alcoholicas/alcoholicas.component';
import { RefrescosComponent } from './pages/refrescos/refrescos.component';
import { HorarioComponent } from './pages/horario/horario.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileComponent,
    EmployeesComponent,
    AddEmployComponent,
    AccountSettingsComponent,
    ProductosComponent,
    AlcoholicasComponent,
    RefrescosComponent,
    HorarioComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MomentModule,
    ChartsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
