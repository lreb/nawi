import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import { ContactData } from 'src/app/models/contact/contact-data';
import { ApiRestService } from 'src/app/shared/services/api-rest.service';

@Component({
  selector: 'app-contactus-form',
  templateUrl: './contactus-form.component.html',
  styleUrls: ['./contactus-form.component.css']
})
export class ContactusFormComponent implements OnInit {

  contactData: ContactData = {
    name: null,
    email: null,
    gender: null,
    agree: null,
    country: null
  };

  countries;

  //  = {
  //   name: 'name',
  //   email: 'demo@gmail.com',
  //   gender: 'male',
  //   agree: false,
  //   country: 'mexico'
  // };

  constructor(private apiRest: ApiRestService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countries = [
      { value: 'usa', text: 'Usa'},
      { value: 'mexico', text: 'México'},
      { value: 'canada', text: 'Canada'}
    ];
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    if (form.valid) {
      this.apiRest.post(this.contactData).subscribe(res => {
        console.log('success: ', res);
      }, err => {
        console.log('error: ', err);
      });
    }
  }

  showJSON(object) {
    //console.log(object);
  }
}
