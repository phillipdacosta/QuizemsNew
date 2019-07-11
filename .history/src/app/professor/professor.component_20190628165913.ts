import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {


  question : any;

  constructor(private data : DataService) { }


  ngOnInit() {


  }


  populateQuiz(){

    this.data.saveData('questions');

  }

  loadQuiz(){
    this.data.loadData('questions');
  }

  newQuestion(){

    let question = new Question();
    this.data.questionslist.push(question)
    console.log(this.data.questionslist)
  }

  createLink(){

    
  }

}
