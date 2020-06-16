import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {

  internship:string;
  internshipP1:string;
  internshipP2:string;
  job:string;
  jobP1:string;
  future:string;
  

  constructor(
    private _colorService: ColorService
  ) { }

  ngOnInit(): void {
    this._colorService.taal.subscribe(t => 
      {
        this.internship = t['internship'];
        this.internshipP1 = t['internshipP1'];
        this.internshipP2 = t['internshipP2'];
        this.job = t['job'];
        this.jobP1 = t['jobP1'];
        this.future = t['future'];
      });
      this._colorService.addEventListener('futureArrow');
    

  }

  

}
