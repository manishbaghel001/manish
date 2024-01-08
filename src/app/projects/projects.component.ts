import { Component } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Tasks Todo Board',
      technologies: 'Angular, Express, MongoDB and Firebase',
      description: [
        'Crafted an innovative Todo Task Board website using Angular 16, HTML, and CSS on the frontend, while ensuring robust functionality with Express and MongoDB on the backend.',
        'Secured user access through Firebase authentication. Elevate your task management experience at ',
      ],
      link: 'https://manishbaghel001.github.io/tasks'
    },
    {
      title: 'Food Ordering Web application',
      technologies: 'HTML, CSS, JQuery',
      description: [
        'Food ordering website , HTML & CSS application - Build a website for ordering food online.',
        'Used jQuery for animation and style.',
      ],
    },
    {
      title: 'Flutter Mobile Application',
      technologies: 'Dart, flutter',
      description: [
        'Mobile App - For booking time slots for gyms.Used dart language for building android and ios Application from a single codebase.',
      ],
    }
  ];
  constructor() { }

  ngOnInit(): void { }
}
