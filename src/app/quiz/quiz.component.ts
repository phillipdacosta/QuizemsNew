import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  timeLeft: number;
  professorName : any
  quizName : any;
  user: Object;
  constructor(private data : DataService) { 

    this.user = 
    {
     
      name : '',
      time_taken : '58 mins',
      grade : '96%',
      pass : 'passed!',
      fail : 'fail'

    }
  }


  refresh(): void {

    window.location.reload();
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

  ngOnInit() {

    window.scrollTo({ top: 0, behavior: 'smooth' })

    this.data.loadData("questions");

    this.timeLeft = this.data.timeLeft
    this.data.startTimer(this.timeLeft);

    this.professorName = this.data.professorName;
    this.quizName = this.data.quizName;

    this.data.saveProfAndClass(this.professorName, this.quizName);
  }

}
