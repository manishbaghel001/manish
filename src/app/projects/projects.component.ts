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
    },
    {
      title: 'Election Database',
      technologies: 'Java',
      description: [
        'Made a Java Program to handle election data for various states and also included counting algorithm to decide the winning party.',
        'Used Data Structures such as Binary Search Tree and Binary Max Heap to handle different queries during counting.',
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void { }
}
