import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressbookServiceService } from 'src/app/addressbook-service.service';
import { AddressBook } from 'src/app/Model/AddressBook';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

//Getting id from routes snapshot using paramMap for doing update operation
Id: any = this.route.snapshot.paramMap.get('Id')

  //Injected router to navigate from one component to another component
  //Injected ActivatedRoute to get access to information about route.here it take id as path variable
  constructor(private router: Router, private _service: AddressbookServiceService,  private route: ActivatedRoute) { }

  // make parameterized constructor of addressbook which is our model
  addressbook: AddressBook = new AddressBook('', '', '', '', '', '', 0, 0);

  //whenever the component is initialized ngOnInit method is invoked first
  ngOnInit(): void {
    console.log("the id is",this.Id);
    this._service.getAddressBookById(this.Id).subscribe((data : any)=>{
      this.addressbook=data.data;
      console.log("the response dto is",data)
      console.log("the message is",data.message)
      console.log("the address book data is",this.addressbook);
    })

  }

    // navigate user to DashboardComponent
  onDashboard() {
    this.router.navigate(["dashboard"]);
  }

   //Calls insertAddressBook method in service which uses http post method to save addressbook data to the database
   //and also navigate the user from form view to dashboard view
  onAddContact() {
    console.log(this.addressbook);
    this._service.insertAddressBook(this.addressbook).subscribe((data :any)=> {
      console.log("Data Addes Sucessfully");
       this.router.navigate(["dashboard"]);

    });
    
  }

   //  Calls updateAddressBookById method in service which uses http update method
    //  to update addressbook data in database using ID aquired from route path for that 
    //we used activated route which take id as a path variable
    onUpdateContact() {
      this._service.updateAddressBookById(this.Id, this.addressbook).subscribe(data => {
         console.log("Data Updated Sucessfully !");
      this.router.navigate(["dashboard"]);
    });
   
}

}