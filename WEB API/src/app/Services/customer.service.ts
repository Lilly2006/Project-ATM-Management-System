
import { ITransaction } from '../Models/itransaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icustomer } from '../Models/icustomer';
import { IAdminLongin } from '../Models/iadmin-longin';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  url:string = "http://localhost:27418/api/";


  constructor(private http :HttpClient) { console.log("DataBase Connected!..")}
  
  GetLoginCredential():Observable<IAdminLongin[]> {
    return this.http.get<IAdminLongin[]>(this.url+"AdminLongin/GetLoginCredential");
  }

  GetCustomerDetails():Observable<Icustomer[]> {
    return this.http.get<Icustomer[]>(this.url+"Customer");
  }

  GetCustomerDetailsByAcc(accountNumber:number):Observable<Icustomer> {
    console.log(accountNumber);
    return this.http.get<Icustomer>(this.url+"Customer/GetAccountNumber?AccountNumber="+accountNumber);
  }

  GetTransaction(accountNumber:number):Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>(this.url+"Transaction/GetAccountNumber?accountNumber=" + accountNumber);
  }

  SaveCustomerDetails(customer: Icustomer) {
    return this.http.post(this.url+"Customer/InsertCustomer", customer);
  }
  
  InsertLoginCredential(adminLogin:IAdminLongin){
    return this.http.post(this.url+"AdminLongin/InsertLoginCredential", adminLogin);
 
  }
 
  UpdateCustomerDetails(customer:Icustomer) {

    return this.http.put(this.url+"Customer/UpdateCustomer",customer);

  }

  RemoveCustomerDetails(accountNumber: number) {

    return this.http.delete(this.url+"Customer/DeleteCustomer?AccountNumber=" + accountNumber);

  }
}
