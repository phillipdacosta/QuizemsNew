import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.loadData("questions");
    this.data.startTimer(this.data.timeLeft);
  }

}
