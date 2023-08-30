import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

//components
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  {
    path: 'main',
    component: MainComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  { path: 'login', component: LoginComponent },
//components
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create', component: CreateComponent },
  // { path: 'chat', component: ChatComponent },
  // { path: 'calendar', component: CalendarComponent },
  // { path: 'maps', component: MapsComponent },
  // { path: 'analytics', component: AnalyticsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
    