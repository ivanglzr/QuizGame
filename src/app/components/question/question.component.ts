import { Component, Input } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/models/questions';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question: Question[] | any;
  @Input() correctOption: string;
  public option: any;
  public i: boolean;
  public iLaunched: boolean = false;

  constructor(
    public _questionService: QuestionService
  ) {}

  getElement(element: HTMLInputElement){
    if(element.value == "" || element.value == undefined || element.value == null || this.iLaunched == true) return

    this.option = element.value
    this.i = this.option == this.correctOption ? true : false

    this._questionService.changeCount(this.i)

    this.iLaunched = true
  }
}
