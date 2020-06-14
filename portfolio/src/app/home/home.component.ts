import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {transition, trigger, animate, style, state} from "@angular/animations";
import { ColorService } from '../color.service';
import { title } from 'process';

let colors: string[] = ["#bfe2f4","#e79fdf","#cee79f","#f2aa6a"];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[

    trigger('softwareAnimation', [
      state('begin', style({left: '100px'})),
      state('einde', style({left: '200px'})),
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

  constructor(private _colorService: ColorService) {

    

 
   }

  ngOnInit(): void {

    this._colorService.setImage('/assets/bg.jpg');
    for(let x = 0; x <= 3; x++)
    {
      let el = document.getElementById(`home${x}`);
      el.addEventListener('mouseenter', e => 
      {
        el.style.color = this._colorService.randomColor();
      });
      el.addEventListener('mouseleave', e =>  el.style.color = '#000000');
    }

  }

  
}
