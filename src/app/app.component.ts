import { Component } from '@angular/core';
import { trigger, transition, group, query, style, animate, animateChild } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { ColorService } from './color.service';
import { slider} from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   slider,
  //   ]
  })

export class AppComponent {
  title = 'Adam Vromman';
  

 
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  
  
}
