import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ContactData } from 'src/app/models/contact/contact-data';

@Component({
  selector: 'app-contactus-form',
  templateUrl: './contactus-form.component.html',
  styleUrls: ['./contactus-form.component.css']
})
export class ContactusFormComponent implements OnInit {

  contactData: ContactData = {
    name: 'name',
    email: 'demo@gmail.com',
    gender: 'male',
    agree: false,
    country: 'mexico'
  }
  constructor() { }

  ngOnInit(): void {
  }

  register() {

  }
}
