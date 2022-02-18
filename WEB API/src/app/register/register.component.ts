import { Component, OnInit } from '@angular/core';
import { IAdminLongin } from '../Models/iadmin-longin';
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  txtuserName:string="";
  txtpassWord:string="";
  msg:string="";
  ngOnInit(): void {
  }
  login:IAdminLongin = {}  as IAdminLongin;
  Save(){
    if(this.txtuserName != "" && this.txtpassWord != "")
    {
    this.login.userName = this.txtuserName;
    this.login.password = this.txtpassWord;
    console.log(this.login);
    this.customerService.InsertLoginCredential(this.login).subscribe(res => { console.log(res); });
    this.msg = "Submitted Successfully";
    }
    else{
      this.msg = "Enter Details";
    }
  }
}
