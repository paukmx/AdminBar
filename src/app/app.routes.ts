import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { AddEmployComponent } from './pages/add-employ/add-employ.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RefrescosComponent } from './pages/refrescos/refrescos.component';
import { HorarioComponent } from './pages/horario/horario.component';





const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'horario', component: HorarioComponent},
    {path: 'employees/profile/:id', component: ProfileComponent},
    {path: 'employees', component: EmployeesComponent},
    {path: 'add-employe', component: AddEmployComponent},
    {path: 'account-settings', component: AccountSettingsComponent},
    {path: 'products' , component: ProductosComponent},
    {path: 'refrescos' , component: RefrescosComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});