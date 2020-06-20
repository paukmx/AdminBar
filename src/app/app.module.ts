import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { GridsterModule } from 'angular-gridster2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTES mat-angular
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';

// RUTAS
import { APP_ROUTES } from './app.routes';

// PAGINAS
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { AddEmployComponent } from './pages/add-employ/add-employ.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { HorarioComponent } from './pages/horario/horario.component';
import { TpvComponent } from './pages/tpv/tpv.component';
import { DistribucionComponent } from './pages/distribucion/distribucion.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileComponent,
    EmployeesComponent,
    AddEmployComponent,
    AccountSettingsComponent,
    ProductosComponent,
    BebidasComponent,
    HorarioComponent,
    TpvComponent,
    DistribucionComponent
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
    CalendarModule,
    AngularFileUploaderModule,
    BrowserAnimationsModule,
    GridsterModule,
    MatIconModule, MatButtonModule, MatSelectModule, MatInputModule, MatCheckboxModule, MatSidenavModule, MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
