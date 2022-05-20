import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AddressbookServiceService } from 'src/app/addressbook-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   
    //injected dependencies which is required to render view properly 
  constructor(private router: Router, private service: AddressbookServiceService) { }

  addressbook: any;

   //Subscribe Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
  ngOnInit(): void {
    this.service.getAddressBook().subscribe(data => {
      console.log(data);
      this.addressbook = data;
    })
    console.log(this.addressbook)
  }

    //when an onAddUser funstion is called, it will naviagte to the form view
  onAddUser() {
     //it will navigate imperatively in your component classes
    this.router.navigate(["form"]);
  }

    //call deleteAddressBookById method of service to delete address book details of that particular id
    deleteAddressRecord(Id: number) {
      this.service.deleteAddressBookById(Id).subscribe(data => { 
         //when a user get deleted from databse it will print data deleted successfully in console
        console.log("Data Deleted Sucessfully") });
      window.location.reload()
    }
  
    //navigates page to update which has form component to load existing employee record for updation
  editAddressRecord(Id: number) {
    this.router.navigate(["update", Id]);
  }
  
}