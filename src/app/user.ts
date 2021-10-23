export class User {
    firstname:string;
    lastname:string;
    phonenumber:number;
    emailaddress:string;
    contacts:Contact[];
}

export class Contact {
    name:string;
    phoneno:number;
    email:string;
    relationship:string;
}

export class sosMessage {
    user:string;
    lat:number;
    long:number;
    message:string;
}

export class fakeCallNumber {
    user:string;
}
