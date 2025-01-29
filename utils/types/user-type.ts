export interface User {
  _id: string;
  fullname: string;
  email: string;
  age: number;
  salary: number;
  sex: string;
}

export interface Inputs {
  fullname: string;
  email: string;
  password?: string;
  dob: string;
  sex: string;
  salary: number;
}
