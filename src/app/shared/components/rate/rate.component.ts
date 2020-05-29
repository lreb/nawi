import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit, OnChanges {
  @Input() rating: number; // decorator to incoming values
  starWidth: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>(); // decorator to outcoming values
  faCoffee = faCoffee;
  faStar = faStar;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 10 / 10;
  }

  onClick() {
    this.notify.emit(`The rating ${this.rating} was clicked!`); // emit events
  }

}
