import { Component, OnInit } from '@angular/core';

import { ITransaction } from 'src/app/Models/itransaction';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{

  temp: any = sessionStorage.getItem("txtaccountNumber");
  accountNumber1: number = this.temp;
  transaction : ITransaction[] = [];
  msg:string="";
  constructor(private transactionServices: CustomerService) 
  {
    transactionServices.GetTransaction(this.accountNumber1).subscribe((c) => { this.transaction = c});
    
   }


  ngOnInit(): void {
  
  }
  

}
