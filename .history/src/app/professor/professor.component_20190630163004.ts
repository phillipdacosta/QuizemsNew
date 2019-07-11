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
  link : any
  flag : boolean = false;

  constructor(private data : DataService) { }


  ngOnInit() {


  }
  


  populateQuiz(){

    this.data.saveData('questions');
    this.flag = true;

  }

  loadQuiz(){
    this.data.loadData('questions');
  }

  newQuestion(){

    let question = new Question();
    this.data.questionslist.push(question)
    console.log(this.data.questionslist)
    this.flag = false;
  }

  createLink(){

    this.link = 'https://quizems-daf82.firebaseapp.com/#/quiz'; 
    //this.router.navigate(['/quiz']);
    
    
      }
  }


