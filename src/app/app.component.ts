import { Component } from '@angular/core';
/**
 * Decorartor for the app componenet
 */
@Component({
  selector: 'app-root', // set name for this main directive/component
  templateUrl: './app.component.html', // template reference
  styleUrls: ['./app.component.css'] // style script reference
})
export class AppComponent {
  title = 'Angular-HandsOn';
}
