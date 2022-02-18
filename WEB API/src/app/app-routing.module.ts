import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerDetailsComponent } from './Admin/add-customer-details/add-customer-details.component';
import { FrontPageComponent } from './Admin/front-page/front-page.component';
import { NavBarComponent } from './Admin/nav-bar/nav-bar.component';
import { ViewCustomerDetailsComponent } from './Admin/view-customer-details/view-customer-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = 
[
  {  path: '', redirectTo: '/login', pathMatch: 'full' },
  {  path: 'login', component: LoginComponent },
  {  path: 'register', component: RegisterComponent },
  
  { 
    path: 'navbar',
    component: NavBarComponent,
    children: [
    {path: '', redirectTo:'front', pathMatch: 'full'},
    {
      path: 'front',
      component: FrontPageComponent
    },
    {
       path: 'view',
       component: ViewCustomerDetailsComponent
    },
    {
    path: 'add',
    component: AddCustomerDetailsComponent
    }
    ]
 },

//  {path:'addd', component: AddCustomerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
