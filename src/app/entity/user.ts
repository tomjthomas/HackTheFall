export class User {
    firstName:string;
    lastName:string;
    _id:string;
    emailAddress:string;
    contactList:Contact[];
}

export class Contact {
    name:string;
    phoneNumber:number;
    email:string;
    relationship:string;
}
