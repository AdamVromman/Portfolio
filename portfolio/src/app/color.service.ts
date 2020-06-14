import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  public foto: any = document.getElementById('foto');
  private _colors = ["ff0000","06ff00","00ffea","fff600","ff00f0"];

  constructor() { }


  public setImage(url: string)
  {
     this.foto.style.backgroundImage = `url('${url}')`;
  }


  public randomColor(): string
  {
    return `#${this._colors[Math.floor(Math.random() * 4)]}`;
  }
}
