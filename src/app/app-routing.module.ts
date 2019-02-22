import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';


const APP_ROUTES: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'login',component: LoginComponent},
  { path: '', redirectTo:'main',pathMatch:'full'}
  
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
