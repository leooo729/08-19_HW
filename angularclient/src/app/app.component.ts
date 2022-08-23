import { Component } from '@angular/core';
import { User } from '/Users/linyulin/angularclient/src/app/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  constructor() {
    this.title = 'Spring Boot - Angular Application';

  }
}