import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {transition, trigger, animate, style, state} from "@angular/animations";

let colors: string[] = ["#bfe2f4","#e79fdf","#cee79f","#f2aa6a"];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[

    trigger('softwareAnimation', [
      state('begin', style({width: '100px'})),
      state('einde', style({width: '200px'})),
      transition('begin => einde',
        [
        animate('1s')
        ]
    ),
      transition('einde => begin',[
        animate('1s')
      ]
      )
    ])
  ]
})
    
export class HomeComponent implements OnInit {

  public bool: boolean = false;
  
  
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {


    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = colors[Math.floor(Math.random() * 4)];

  }

  public setBool()
  {
    if (this.bool)
    {
      this.bool = false;
    }
    else
    {
      this.bool = true;
    }
    
  }


}
