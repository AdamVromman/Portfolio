import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  public foto: any = document.getElementById('img');
  private _colors = ["ff0000","06ff00","00ffea","fff600","ff00f0"];

  constructor() { }


  public setImage(url: string)
  {
     this.foto.src = url;
  }


  public randomColor(): string
  {
    return `#${this._colors[Math.floor(Math.random() * 4)]}`;
  }


  public addEventListener(id: string)
  {
    try{
      let el = document.getElementById(id);
      el.addEventListener('mouseenter', () => el.style.color = this.randomColor());
      el.addEventListener('mouseout', () => el.style.color = '#000000');
    }
    catch
    {

    }
   
  }
}
