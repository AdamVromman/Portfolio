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

  public adam:string;
  public future: string;
  public projects: string;
  public contact: string;


  constructor(private _colorService: ColorService) {


 
   }

  ngOnInit(): void {

    
    this._colorService.taal.subscribe(t =>
      {
        this.adam = t['adam'];
        this.future = t['future'];
        this.projects = t['projects'];
        this.contact = t['contact'];
      }
    )

    this._colorService.setImage('/assets/bg.jpg');
    this._colorService.addEventListener("me");
    this._colorService.addEventListener("future");
    this._colorService.addEventListener("projects");
    this._colorService.addEventListener("contact");
    

  }

  
}
