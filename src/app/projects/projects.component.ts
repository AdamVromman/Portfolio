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
  merel:string;
  merelP:string;
  bikeapp:string;
  bikeappP:string;
  projects:string;
  bikes:string;
  bikesP:string;
  aottg2: string;
  aottg2P: string;

  constructor(private _colorService: ColorService) {

    _colorService.setImage('/assets/projects.jpg');
   }

  ngOnInit(): void {

    this._colorService.taal.subscribe(t => 
      {
        this.past = t['past'];
        this.present = t['present'];
        this.madonna = t['madonna'];
        this.madonnaP = t['madonnaP'];
        this.merel = t['merel'];
        this.merelP = t['merelP'];
        this.bikeapp = t['bikeapp'];
        this.bikeappP = t['bikeappP'];
        this.projects = t['projects'];
        this.bikes = t['bikes'];
        this.bikesP = t['bikesP'];
        this.aottg2 = t['aottg2'];
        this.aottg2P = t['aottg2P'];
      });
      

      var observer = new  IntersectionObserver((entries) => 
      { 
        if(entries[0].intersectionRatio > 0.5)
        {
          this._colorService.setImage(`/assets/${entries[0].target.id}.jpg`);
        }
      }, {threshold: 0.5});
      observer.observe(document.getElementById('madonnaP'));
      observer.observe(document.getElementById('bikesP'));
      observer.observe(document.getElementById('bikeappP'));
      observer.observe(document.getElementById('aottg2P'));
      observer.observe(document.getElementById('merelP'));
      

    



  }


  public changeImg(name: string)
  {
    this._colorService.setImage(`/assets/${name}.jpg`);
  }

}
