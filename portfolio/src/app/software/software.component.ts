import { Component, OnInit, ElementRef } from '@angular/core';
import { trigger, transition, group, query, style, animate, animateChild } from '@angular/animations';

let colors: string[] = ["#bfe2f4","#e79fdf","#cee79f","#f2aa6a"];

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css'],
  animations:[
    trigger('routeAnimations', [
      transition('homePage => softwarePage', [
        group([
          query(':enter', style({color:'red'}) ),
          query(':leave', [
            animate('1s', style({ color:'blue' }))
          ]),
          query(':enter', [
            animate('1s', style({ color:'red' }))
          ]),
        ])
      ])
    ])
  ]
})
export class SoftwareComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = colors[Math.floor(Math.random() * 4)];
  }

}
