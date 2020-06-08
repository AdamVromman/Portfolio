import { Component } from '@angular/core';
import { trigger, transition, group, query, style, animate, animateChild } from '@angular/animations';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
    animations: [
      trigger('routeAnimations', [
        transition('homePage => softwarePage', [
          
            query(':enter', style({ opacity: 0 })),
            query(':leave', [
              animate('1s', style({ opacity: 0 }))
            ]),
            query(':enter', [
              animate('1s', style({ opacity: 1 }))
            ]),
          
        ])
      ])
    ]
  })

export class AppComponent {
  title = 'portfolio';
 
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animations'];
  }
  
}
