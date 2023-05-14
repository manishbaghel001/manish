import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  constructor() { }
  increaseSizeGmail() {
    let icon = document.getElementById("my-icon-gmail");
    icon?.classList.add("my-icon-large");
  }
  increaseSizeGit() {
    let icon = document.getElementById("my-icon-github");
    icon?.classList.add("my-icon-large");
  }
  increaseSizeLinkedin() {
    let icon = document.getElementById("my-icon-linkedin");
    icon?.classList.add("my-icon-large");
  }
  ngOnInit(): void { }

}
