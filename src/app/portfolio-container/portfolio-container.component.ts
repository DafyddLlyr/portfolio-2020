import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-container',
  templateUrl: './portfolio-container.component.html',
  styleUrls: ['./portfolio-container.component.scss']
})
export class PortfolioContainerComponent implements OnInit {

  portfolio = [
    { id: 1, src: 'hikebuddy.png', title: 'HikeBuddy', description: 'Plan your hike on the Scottish National Trail - create routes, track your progress and explore points of interest along the trail. Full-stack app with a Java/Spring RESTful API and a React frontend.', tags: ['Python', 'PostGIS', 'Angular'] },
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
