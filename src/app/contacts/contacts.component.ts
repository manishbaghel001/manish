import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  constructor(private http: HttpClient) { }
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

  downloadCV() {
    const fileName = "Manish's Resume.pdf";
    const url = 'assets/Manish_Resume.pdf';

    this.http.get(url, { responseType: 'blob' }).subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/octet-stream' });
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(a.href);
    });
  }
  ngOnInit(): void { }

}
