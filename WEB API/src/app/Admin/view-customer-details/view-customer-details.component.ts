import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Icustomer } from 'src/app/Models/icustomer';
import { DetailsComponent } from './details/details.component';
import { CustomerService } from 'src/app/Services/customer.service';
import { TransactionComponent } from './transaction/transaction.component';


@Component({
  selector: 'app-view-customer-details',
  templateUrl: './view-customer-details.component.html',
  styleUrls: ['./view-customer-details.component.css']
})
export class ViewCustomerDetailsComponent implements OnInit {

  cus: Icustomer = {} as Icustomer;
   customers:Icustomer[] = [];
   
  
  constructor(private customerServices: CustomerService,private dialogRef:MatDialog,) 
  { 
    customerServices.GetCustomerDetails().subscribe((c) => { this.customers = c;});

  }
  
  openEdit(accountNumber:number){
    sessionStorage.setItem("accountNumber",JSON.stringify(accountNumber));
    this.dialogRef.open(DetailsComponent);
 
    }

  openTransaction(accountNumber:number){
    sessionStorage.setItem("txtaccountNumber",JSON.stringify(accountNumber));
    this.dialogRef.open(TransactionComponent);
  }

  DeleteCustomerDetails(accountNumber:number): void {
 
    this.customerServices.RemoveCustomerDetails(accountNumber).subscribe(res => console.log(res));
    alert("Deleted Successfully!..");
  }

msg: string = "";
accountnumbersearch:string="";
valuecheck:Array<any>=[];




  ngOnInit(): void {
  }

  search()
  {this.ngOnInit();
  
   if(this.accountnumbersearch != ""){
   
      this.valuecheck=this.customers.filter(res=>{
        return res.accountNumber.toString().match(this.accountnumbersearch);
        
       
      })
      if(this.valuecheck.length !=0){
      
        this.customers=this.valuecheck;
      }
      else{
        this.msg = "Enter Valid Account Number"
        
      }
   }
   
   else{
    this.msg = "Enter account Number"
   }
  }
  
  
}
