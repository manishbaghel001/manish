import { Component } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: "University Institute of Engineering and Technology, Kurukshetra University",
      course: 'B.Tech(Computer Science)',
      duration: '2017-2021',
      score: '69%',
    },
    {
      institute: 'B.N Model Sr. Sec. School, Palwal',
      course: 'Maths, Physics, Chemistry',
      duration: '2015-2016',
      score: '92%',
    },
    {
      institute: 'Vishwa Bharti Public High School, Palwal',
      course: 'General',
      duration: '2013-2014',
      score: '87%',
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
