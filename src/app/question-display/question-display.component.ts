import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.css']
})
export class QuestionDisplayComponent implements OnInit {


  @Input() questionModel : Question;




  constructor() { }

  ngOnInit() {

  }
}