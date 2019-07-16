import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {


  @Input() questionModel: Question;

  constructor(private data: DataService) { }

  removeQuestion() {

    this.data.removeQues(this.questionModel)
    this.data.validationFlag = false;
  }



  ngOnInit() {
    window.scrollTo({ top: 10000, behavior: 'smooth' })
  }

}
