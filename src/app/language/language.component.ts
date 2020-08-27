import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  public taal: string = 'en';
  constructor(
    private _colorService: ColorService
  ) { }

  ngOnInit(): void {

    this._colorService.taal.subscribe(t =>{
      this.taal = t['lang'];
    });

  }

  

  public button()
  {
    this._colorService.changeLang();
  }

}
