import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {


  @Input() questionModel : Question;




  constructor(private data : DataService) { }

  removeQuestion(ques){

    this.data.removeQues(ques)
    this.data.validationFlag = true;
  }

  

  ngOnInit() {

  }

}
