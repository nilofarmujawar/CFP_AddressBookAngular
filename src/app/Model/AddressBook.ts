//our model class
export class AddressBook {

    firstName:string;
    lastName:string;
    email:string;
    address:string;
    city:string;
    state:string;
    zip:number;
    phoneNumber:number;

    constructor(firstName:string,lastName:string,email:string,address:string,city:string,state:string,zip:number,phoneNumber:number){

        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;

    }
}