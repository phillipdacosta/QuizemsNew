import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  timeLeft: number;
  professorName : any = "phil"
  quizName : any;


  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.loadData("questions");

    this.timeLeft = this.data.timeLeft
    this.data.startTimer(this.timeLeft);

    this.professorName = this.data.professorName;
    this.quizName = this.data.quizName;

    this.data.saveProfAndClass(this.professorName, this.quizName);
  }

}
