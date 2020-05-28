import { Component, OnInit } from '@angular/core';
import { IService } from 'src/app/models/IServices';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _listService: string;
  /** Get value to search */
  get listFilter(): string {
    return this._listService;
  }
  /** Set value to search */
  set listFilter(value: string) {
    this._listService = value;
    this.filteredServices = this.listFilter ? this.performFilter(this.listFilter) : this.services;
  }
  filteredServices: IService[]; // serach list
  services: IService[]; // intial list

  constructor() {
    this.getServices();
    this.filteredServices = this.services;
    // this.listFilter = 'design';
   }

  ngOnInit(): void {

  }

  performFilter(filterBy: string): IService[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.services.filter((service: IService) =>
      service.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  getServices() {
    this.services = [
      {number: 1 , name: 'development', description: 'create web apps', price: 10.25},
      {number: 2 , name: 'design', description: 'design apps', price: 30.25},
      {number: 3 , name: 'qa', description: 'test appps', price: 20.25}
    ];
  }

}
