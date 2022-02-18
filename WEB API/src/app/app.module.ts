import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { AddCustomerDetailsComponent } from './Admin/add-customer-details/add-customer-details.component';
import { ViewCustomerDetailsComponent } from './Admin/view-customer-details/view-customer-details.component';
import { NavBarComponent } from './Admin/nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './Services/customer.service';
import { TransactionComponent } from './Admin/view-customer-details/transaction/transaction.component';
import { DetailsComponent } from './Admin/view-customer-details/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule} from '@angular/material/dialog';
import { FrontPageComponent } from './Admin/front-page/front-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddCustomerDetailsComponent,
    ViewCustomerDetailsComponent,
    NavBarComponent,
    TransactionComponent,
    DetailsComponent,
    FrontPageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,MatButtonModule,MatIconModule
   
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
