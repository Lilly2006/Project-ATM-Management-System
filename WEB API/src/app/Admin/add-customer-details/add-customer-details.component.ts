import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Icustomer } from 'src/app/Models/icustomer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-add-customer-details',
  templateUrl: './add-customer-details.component.html',
  styleUrls: ['./add-customer-details.component.css']
})
export class AddCustomerDetailsComponent implements OnInit {
 
  customerdetailsForm: any | FormGroup;

  cus: Icustomer = {} as Icustomer;

  txtaccholder:string="";
  txtaddress:string="";
  txtcity:string="";
  txtEmail:string="";
  txtContact:number=0;
  txtNumber:number=0;
  txtPinNumber:number=0;
  txtAccountNumber:number=0;
  txtBalance:number=0;
  
  constructor(private customerService: CustomerService){}
  ngOnInit() {
    this.customerdetailsForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, [Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
      city: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone:new FormControl(null,Validators.required),
      cardnumber:new FormControl(null,Validators.required),
      pinnumber:new FormControl(null,[Validators.required,Validators.maxLength(4)]),
      accountnumber:new FormControl(null,[Validators.required,Validators.maxLength(16)]),
      balance:new FormControl(null,Validators.required)
    
    })
  }
  submit(){
    this.cus.name = this.txtaccholder;
    this.cus.address = this.txtaddress;
    this.cus.city = this.txtcity;
    this.cus.email = this.txtEmail;
    this.cus.accountNumber = this.txtAccountNumber;
    this.cus.accountType = "Savings";
    this.cus.cardNumber = this.txtNumber;
    this.cus.pinNumber = this.txtPinNumber;
    this.cus.balance=this.txtBalance;
    this.cus.contact=this.txtContact;
 console.log(this.cus);
    this.customerService.SaveCustomerDetails(this.cus).subscribe(res => { console.log(res); });
    alert("Submitted Successfully");
  }
  Reset(){
    this.txtaccholder="";
    this.txtaddress="";
    this.txtcity="";
    this.txtEmail="";
    this.txtAccountNumber=0;
    this.txtNumber=0;
    this.txtPinNumber=0;
    this.txtBalance=0;
    this.txtContact=0;
  }

}
