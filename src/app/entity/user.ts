export class User {
  firstname: string;
  lastname: string;
  _id: string;
  email: string;
  contacts: Contact[];
}

export class Contact {
  name: string;
  phonenumber: number;
  email: string;
  relationship: string;
}

export class sosMessage {
  user: string;
  lat: number;
  long: number;
  message: string;
}

export class fakeCallNumber {
  user: string;
}
