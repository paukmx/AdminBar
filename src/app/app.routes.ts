import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { AddEmployComponent } from './pages/add-employ/add-employ.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { HorarioComponent } from './pages/horario/horario.component';
import { TpvComponent } from './pages/tpv/tpv.component';
import { DistribucionComponent } from './pages/distribucion/distribucion.component';





const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'horario', component: HorarioComponent},
    {path: 'employees/profile/:id', component: ProfileComponent},
    {path: 'employees', component: EmployeesComponent},
    {path: 'add-employe', component: AddEmployComponent},
    {path: 'account-settings', component: AccountSettingsComponent},
    {path: 'products' , component: ProductosComponent},
    {path: 'bebidas/:subCategoria' , component: BebidasComponent},
    {path: 'tpv', component: TpvComponent},
    {path: 'distribucion', component: DistribucionComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});