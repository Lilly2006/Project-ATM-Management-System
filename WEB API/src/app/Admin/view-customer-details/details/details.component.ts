import { TemplateLiteral } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { pairwise } from 'rxjs';
import { Icustomer } from 'src/app/Models/icustomer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Temp: any =  sessionStorage.getItem("accountNumber");

  AccountNumber:number = parseInt(this.Temp);

  customers: Icustomer = {} as Icustomer;

  
  constructor(public customerServices: CustomerService) 
  { 
    
    customerServices.GetCustomerDetailsByAcc(this.AccountNumber).subscribe((c) => { this.customers = c;});
    
  }
 
  UpdateDetail(): void {

    this.customers.accountNumber= this.AccountNumber;
    this.customers.name = this.customers.name;
    this.customers.address = this.customers.address;
    this.customers.city = this.customers.city;
    this.customers.email = this.customers.email;
    this.customers.contact = this.customers.contact;
    this.customers.cardNumber = this.customers.cardNumber;
    this.customers.pinNumber = this.customers.pinNumber;
    this.customers.accountType = this.customers.accountType;
    this.customers.balance = this.customers.balance;

    this.customerServices.UpdateCustomerDetails(this.customers).subscribe(res => { console.log(res); });
    alert("Updated Successfully...");
  }

  
  
  ngOnInit(): void {

  }

}
