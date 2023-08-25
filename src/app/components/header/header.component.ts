import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public githubUrl: string;

  constructor() {
    this.githubUrl = "https://github.com/ivanglzr/QuizGame"
  }
}
