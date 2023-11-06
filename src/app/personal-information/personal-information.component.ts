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
    ['Work Exp', '2.3 Years'],
    ['Education', 'B.tech(2021)'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 2+ years of experience in building angular applications',
    'with a passion for innovation in technology, self-development and ',
    'sharpening my leadership skills in a cutting edge technology area.',
  ];

  constructor() { }

  ngOnInit(): void { }
}
