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

  observer;

  constructor(private _colorService: ColorService) {

    _colorService.setImage('/assets/merelP.jpg');
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
      
      
      if (window.innerWidth >= 768)
      {
        this.observer = new  IntersectionObserver((entries) => 
        { 
          if(entries[0].intersectionRatio >= 1)
          {
            this._colorService.setImage(`/assets/${entries[0].target.id}.jpg`);
          }
        }, {threshold: 1});
      }
      else
      {
        this.observer = new  IntersectionObserver((entries) => 
        { 
          if(entries[0].intersectionRatio >= 0.5)
          {
            this._colorService.setImage(`/assets/${entries[0].target.id}.jpg`);
          }
        }, {threshold: 0.5});
      }
    
        this.observer.observe(document.getElementById('madonnaObserver'));
        this.observer.observe(document.getElementById('bikesObserver'));
        this.observer.observe(document.getElementById('bikeappObserver'));
        this.observer.observe(document.getElementById('aottg2Observer'));
        this.observer.observe(document.getElementById('merelObserver'));  

      onresize = () =>
      {
        if (window.innerWidth >= 768)
        {
        this.observer = new  IntersectionObserver((entries) => 
        { 
          if(entries[0].intersectionRatio >= 1)
          {
            this._colorService.setImage(`/assets/${entries[0].target.id}.jpg`);
          }
        }, {threshold: 1});
        this.observer.observe(document.getElementById('madonnaObserver'));
        this.observer.observe(document.getElementById('bikesObserver'));
        this.observer.observe(document.getElementById('bikeappObserver'));
        this.observer.observe(document.getElementById('aottg2Observer'));
        this.observer.observe(document.getElementById('merelObserver'));  
      }
      else
      {
        this.observer = new  IntersectionObserver((entries) => 
        { 
          if(entries[0].intersectionRatio >= 0.5)
          {
            this._colorService.setImage(`/assets/${entries[0].target.id}.jpg`);
          }
        }, {threshold: 0.5});
        this.observer.observe(document.getElementById('madonnaObserver'));
        this.observer.observe(document.getElementById('bikesObserver'));
        this.observer.observe(document.getElementById('bikeappObserver'));
        this.observer.observe(document.getElementById('aottg2Observer'));
        this.observer.observe(document.getElementById('merelObserver'));  
      }
      }
  }

}
