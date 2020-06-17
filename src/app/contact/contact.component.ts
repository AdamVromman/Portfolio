import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _colorService: ColorService) { }

  ngOnInit(): void {
    this._colorService.addEventListener('contactArrow');
    this._colorService.addEventListener('email');
    this._colorService.addEventListener('github');
    this._colorService.addEventListener('linkedin');
    this._colorService.setImage('/assets/contact.jpg');
  }

}
