import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  timeLeft: number;


  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.loadData("questions");

    this.timeLeft = this.data.timeLeft
    this.data.startTimer(this.timeLeft);
    this.data.saveProfAndClass(this.data.professorName, this.data.quizName);
  }

}
