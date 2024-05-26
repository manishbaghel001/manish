import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name', 'Manish Baghel'],
    ['DOB', '30/12/1999'],
    ['Work Exp', '3.5 Years'],
    ['Education', 'B.tech(2021)'],
    ['Interests', 'Travelling, Cinephile, Gaming']
  ];

  aboutMe: string[] = [

    'As a Full Stack Developer with 3+ years specializing in Angular,',
    'I craft robust web apps, bridging front-end and back-end for comprehensive solutions.',
    'Passionate about tech innovation, I bring strong leadership to dynamic teams.',
    'Eager to contribute to cutting-edge projects, my commitment to self-development sets me apart.',
    'Beyond coding, I explore diverse cultures through travel.'
  ];

  constructor() { }

  ngOnInit(): void { }
}
