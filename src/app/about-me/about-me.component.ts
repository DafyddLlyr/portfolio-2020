import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  techStack = [
    { name: 'HTML5', icon: 'postgres.png'},
    { name: 'CSS3', icon: 'postgres.png'},
    { name: 'JavaScript', icon: 'postgres.png'},
    { name: 'Typescript', icon: 'postgres.png'},
    { name: 'Python', icon: 'postgres.png'},
    { name: 'Flask', icon: 'postgres.png'},
    { name: 'Angular', icon: 'postgres.png'},
    { name: 'AWS', icon: 'postgres.png'},
    { name: 'OpenLayers', icon: 'postgres.png'},
    { name: 'PostgreSQL', icon: 'postgres.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
