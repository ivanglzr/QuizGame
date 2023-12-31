import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/questions';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit{
  public questions: Question[];
  public countCorrect: number;

  constructor(
    public _questionService: QuestionService
  ) {
    this.questions = this._questionService.questions
  }

  ngOnInit() {
    console.log(this.questions);
    
  }

  checkOptions(){
    this.countCorrect = this._questionService.getCount() 
    console.log(this.countCorrect);
    
  }
}
