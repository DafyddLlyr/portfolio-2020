import { PortfolioItem } from './portfolio-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-container',
  templateUrl: './portfolio-container.component.html',
  styleUrls: ['./portfolio-container.component.scss']
})
export class PortfolioContainerComponent implements OnInit {

  portfolio: Array<PortfolioItem> = [
    {
      githubRepo: 'https://github.com/DafyddLlyr/HikeBuddy',
      src: 'hikebuddy.png',
      title: 'HikeBuddy',
      subtitle: 'React / Java',
      description: 'Plan your hike on the Scottish National Trail - create routes, track your progress and explore points of interest along the trail. Full-stack app with a Java/Spring RESTful API and a React frontend.',
      tags: ['Java', 'Spring', 'Hibernate', 'React', 'JavaScript', 'Leaflet', 'PostgreSQL', 'Turf.js'],
      demoUrl: null,
      features: [
        'Create hiking routes on an interactive Leaflet map which uses Turf.js to calculate length of section using GeoJSON data',
        'Add and remove favourite locations',
        'Track route completion progress and view suggested locations',
      ]
    },
    {
      githubRepo: 'https://github.com/DafyddLlyr/World_Quiz',
      src: 'world_quiz.png',
      title: 'World Quiz',
      subtitle: 'Vue.js / Express',
      description: 'Travel the globe in this interactive and educational quiz game, where learners can improve their knowledge of flags, capitals, currencies and continents. A full stack web-app build as a group project in Week 8',
      tags: ['Google Charts', 'Vue.js', 'MongoDB', 'Express', 'WebGL Earth', 'JavaScript', 'REST APIs'],
      demoUrl: null,
      features: [
        "Users can build up a profile to track which countries they know well(and those they don't!)",
        "Fully explorable globe implemented with WebGL Earth",
        "All questions, answers, and quiz topics are built dynamically from the API and are not hardcoded"
      ]
    },
    {
      githubRepo: 'https://github.com/DafyddLlyr/International_Beer_Tracker',
      src: 'beer_tracker.png',
      title: 'International Beer Tracker',
      subtitle: 'Vue.js / Leaflet',
      description: 'Built in a weekend using Vue.js, Leaflet, Google Charts, Open Beer Database API and the RESTCountries API. Beers can be filtered on the map by style, category, country or brewery. A random beer can also be selected and the map will fly to that location. Further insight and analysis into these categories is given when a beer is selected.',
      tags: ['Vue.js', 'JavaScript', 'Leaflet', 'Google Charts', 'REST APIs'],
      demoUrl: 'https://beertracker.surge.sh/',
      features: null
    },
    {
      githubRepo: 'https://github.com/DafyddLlyr/UK_Energy_Mix',
      src: 'energy_mix.png',
      title: 'UK Energy Mix',
      subtitle: 'Vue.js / Google Charts',
      description: "A visual breakdown of the UK's current energy mix, tying together National Grid's Carbon Intensity API and Google Charts",
      tags: ['JavaScript', 'Vue.js', 'Google Charts', 'REST APIs'],
      demoUrl: "http://ukenergymix.surge.sh/",
      features: null
    },
    {
      githubRepo: 'https://github.com/DafyddLlyr/Spending_Tracker',
      src: 'spending_tracker.png',
      title: 'Spending Tracker',
      subtitle: 'Ruby / Sinatra',
      description: 'A spending tracker which offers insights into spending to allow users to better control their finances. First solo CodeClan project, completed in week 5.',
      tags: ['Ruby', 'PostgreSQL', 'Sinatra', 'HTML', 'CSS'],
      demoUrl: null,
      features: [
        "Dynamic insights into the users’ spending patterns",
        "Add and manage transactions, merchants and categories",
        'Users can "round up" transactions and add this to a savings pot',
        "Dashboard view allowing users an overview of their spending on one page"
      ]
    },
    {
      githubRepo: 'https://github.com/DafyddLlyr/Homework_Wk07D3_Countries_Vue_Components_App',
      src: 'world_facts.png',
      title: 'World Facts App',
      subtitle: 'Vue.js / REST API',
      description: "An app which displays country data from the RESTCountries API, built with multiple Vue.js components. Features include search with autocomplete, random country selection, and accessing neighbouring countries.",
      tags: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'REST APIs'],
      demoUrl: "https://worldfactsapp.surge.sh/",
      features: null
    },
    {
      githubRepo: 'https://github.com/DafyddLlyr/Homework_Wk07D2_Currency_Converter',
      src: 'currency.png',
      title: 'Currency Converter',
      subtitle: 'Vue.js / REST API',
      description: "Currency converter build with JavaScript and Vue which ties together RESTCountries API and ExchangeRatesAPI.io",
      tags: ['JavaScript', 'CSS', 'HTML', 'Vue.js', 'REST APIs'],
      demoUrl: "https://currencycovnverter.surge.sh/",
      features: null
    },
    {
      githubRepo: 'https://github.com/DafyddLlyr/Homework_Wk07D1_Vue_To_Do_List',
      src: 'todo_list.png',
      title: 'Post-It To Do List',
      subtitle: 'Vue.js',
      description: "A to do list built using the Vue.js framework for JavaScript, and Webpack. Users can add items to their list and set the priority of the tasks.",
      tags: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Webpack'],
      demoUrl: "https://postittodo.surge.sh/",
      features: null
    },
    {
      githubRepo: 'https://github.com/DafyddLlyr/Freight_Inc_Global_Shipping',
      src: 'freight.png',
      title: 'Freight Inc. Global Shipping Ltd.',
      subtitle: 'JavaScript / HTML',
      description: "My first front-end application using vanilla JavaScript which allows a shipping company to create and remove orders.",
      tags: ['JavaScript', 'HTML', 'CSS'],
      demoUrl: "https://dafyddllyr.github.io/Freight_Inc_Global_Shipping",
      features: null
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
