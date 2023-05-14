import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'Data Structures and Algorithms',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'JAVA',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'C/C++',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Git/Github',
      level: 'Intermidiate',
      rating: 75,
    }
  ];
  constructor() { }

  ngOnInit(): void { }
}
