import { DatePipe } from '@angular/common';

export class Employee {
  id?: number; // Corresponds to the `@Id` annotation in Spring Boot
  email: string;
  password: string;
  zone: string;
  username: string;
  photoUrl: string;

  // Default constructor
  constructor(
    id?: number  ,
    email: string = '',
    password: string = '',
    zone: string = '',
    username: string = '',
    photoUrl: string = ''
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.zone = zone;
    this.username = username;
    this.photoUrl = photoUrl;
  }
}

