import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  resume: string;
  meP1: string;
  meP2: string;
  meP3: string;
  meP4: string;
  meP5: string;
  meP6: string;

  constructor( private _colorService: ColorService) {

    _colorService.setImage('/assets/meBg.jpg');
   
    

   }

  ngOnInit(): void {
    this._colorService.addEventListener('meArrow');
    this._colorService.addEventListener('cv');
    this._colorService.taal.subscribe(t => 
      {
        this.meP1 = t['meP1'];
        this.meP2 = t['meP2'];
        this.meP3 = t['meP3'];
        this.meP4 = t['meP4'];
        this.meP5 = t['meP5'];
        this.meP6 = t['meP6'];
        if(t['lang'] == 'en')
        {
          this.resume = "";
        }
        else
        {
          this.resume = "NL";
        }
      });
  }

}
