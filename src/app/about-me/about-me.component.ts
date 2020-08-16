import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  techStack = [
    { name: 'Python', icon: 'python.png'},
    { name: 'PostgreSQL', icon: 'postgres.png'},
    { name: 'Typescript', icon: 'ts.png'},
    { name: 'Angular', icon: 'angular.png'},
    { name: 'Amazon Web Services', icon: 'aws.png'},
    { name: 'OpenLayers', icon: 'openlayers.png'},
    { name: 'HTML5', icon: 'html5.png'},
    { name: 'CSS3', icon: 'css3.png'},
    { name: 'JavaScript', icon: 'js.png'},
    { name: 'Flask', icon: 'flask.png'},
    { name: 'QGIS', icon: 'qgis.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
