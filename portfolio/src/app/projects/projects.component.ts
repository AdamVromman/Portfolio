import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private _colorService: ColorService) {

    _colorService.setImage('/assets/projectsBg.jpg');
   }

  ngOnInit(): void {
  }

}
