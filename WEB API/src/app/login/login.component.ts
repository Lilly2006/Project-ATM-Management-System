import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../Services/customer.service';
import { IAdminLongin } from '../Models/iadmin-longin';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any;
  passWord:any;
  adminLogin:IAdminLongin[] = [];
  userName1:string="";
  passWord1:string="";
  
  public loginForm!:FormGroup;
  
 
  

  constructor(private customerServices: CustomerService, private formBuilder:FormBuilder,private http:HttpClient,private router:Router ) 
  { 
    customerServices.GetLoginCredential().subscribe((c) => { this.adminLogin = c;});
    console.log(this.loginForm);
  }


  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  alert:string="";
  count:number=0;
  login(){
    for(let i=0; i<this.adminLogin.length; i++)
    {
      if(this.username==this.adminLogin[i].userName&& this.passWord==this.adminLogin[i].password)
      {
        this.router.navigate(['navbar']);
        this.count++;
      }

    }
   if(this.count == 0)
   {
    this.alert = "User or Password invaild";
   }
  }

}
