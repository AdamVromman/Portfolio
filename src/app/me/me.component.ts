import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  constructor( private _colorService: ColorService) {

    _colorService.setImage('/assets/meBg.jpg');
    

   }

  ngOnInit(): void {
    this._colorService.addEventListener('meArrow');
  }

}
