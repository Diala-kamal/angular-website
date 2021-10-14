import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  name!: string;
  email!: string;
  message!: string;
  constructor() {}

  ngOnInit(): void {}
  submitForm() {
    const message = `my name is ${this.name}`;
    console.log(message);
  }
}
