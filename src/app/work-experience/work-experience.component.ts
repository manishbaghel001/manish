import { Component } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'System Engineer',
      company: 'Infosys',
      duration: 'June 2021 - Now',
      description: [
        'Working on the migration of legacy application to angular and handling java code for reverse engineering for leading institution client of Infosys.',
        'Experience working with HTML, CSS, JavaScript, Angular.',
        'Redeveloped KYC application for a bank using NGX formly framework.',
        'Working knowledge in the development of user interface. All the forms in this application are generated dynamically.',
        'Designed and created shared components which could be used seamlessly in any of the screen no matter what transactional data format that screen design would support.',
        'Code was written dynamic enough that any new requirements change does not effect the application.'
      ],
    },
    {
      role: 'Team Member',
      company: 'D - Code',
      duration: 'Sep 2018 - May 2021',
      description: [
        'D - Code is the Society for Computer Engineers.It is responsible for conducting workshops on trending technologies to encourage student.',
        'Mentored over 50 + students in learning Java and Data Structures and Algorithms.Have worked on numerous projects as a team.',
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void { }
}
