import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';
import {photoLinks, photoRechts} from '../route-animation';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  // animations: [
  //  photoRechts,
  //  photoLinks
  //   ]
})
export class PhotoComponent implements OnInit {

  public photo1: boolean = true;
  public url1: string = "assets/home3.jpg";
  public url2: string = "assets/home3.jpg";
  public photoMode: boolean = true;

  constructor(private _colorService: ColorService) {
    
    this._colorService.fotoAanpas.subscribe((url: string) => {
      if (this.photo1)
      {
        
        this.photo1 = false
        this.url2 = url;
      }
      else
      {
        
        this.photo1 = true;
        this.url1 = url;
      }
      
    });
   }

  ngOnInit(): void {
  }

  public getPhotoMode():string
  {
    return this.photoMode? "onScreen":"offScreen";
    
  }

}
