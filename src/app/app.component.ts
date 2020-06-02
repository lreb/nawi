import { Component } from '@angular/core';
import { Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, Router } from '@angular/router';
import { MessageService } from './modules/messages/message.service';
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

  get isMessageDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }

  constructor(
    private router: Router,
    private messageService: MessageService
  ) {
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

  displayMessages(): void {
    this.router.navigate([{ outlets: { popup: ['messages'] } }]);
    this.messageService.isDisplayed = true;
  }

  hideMessages(): void {
    this.router.navigate([{ outlets: { popup: null } }]);
    this.messageService.isDisplayed = false;
  }

}
