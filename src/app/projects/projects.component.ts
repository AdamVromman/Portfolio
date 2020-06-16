import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  past:string;
  present:string;
  madonna:string;
  madonnaP:string;
  bikeapp:string;
  bikeappP:string;
  projects:string;
  bikes:string;
  bikesP:string;

  constructor(private _colorService: ColorService) {

    _colorService.setImage('/assets/projectsBg.jpg');
   }

  ngOnInit(): void {
    this._colorService.addEventListener('bikeapp');
    this._colorService.addEventListener('madonna');
    this._colorService.addEventListener('merel');
    this._colorService.addEventListener('projectsArrow');
    this._colorService.addEventListener('madonnaLink');
    this._colorService.addEventListener('bikeappLink');
    this._colorService.addEventListener('bikes');

    this._colorService.taal.subscribe(t => 
      {
        this.past = t['past'];
        this.present = t['present'];
        this.madonna = t['madonna'];
        this.madonnaP = t['madonnaP'];
        this.bikeapp = t['bikeapp'];
        this.bikeappP = t['bikeappP'];
        this.projects = t['projects'];
        this.bikes = t['bikes'];
        this.bikesP = t['bikesP'];
      });

    



  }


  public changeImg(name: string)
  {
    this._colorService.setImage(`/assets/${name}.jpg`);
  }

  public resetImg()
  {
    this._colorService.setImage('/assets/projectsBg.jpg');
  }

}
