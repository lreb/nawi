import { Component } from '@angular/core';
import { Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, Router } from '@angular/router';
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
  loading = true;
  constructor(private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

}
