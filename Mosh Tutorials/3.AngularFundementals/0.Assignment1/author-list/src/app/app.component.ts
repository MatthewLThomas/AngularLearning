import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Authors';
  authors = ["james", "smith", "jeffery"];
  length = this.authors.length;
}
