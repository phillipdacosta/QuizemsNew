import { Component, OnInit, Input } from '@angular/core';
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
  @Input() time : number = 4444440;


  constructor(private data : DataService) { }


  ngOnInit() {

    window.scrollTo(0,1000);

  }

  saveEditedTime(time){

    this.data.startTimer(this.time);
  }
  

  
  populateQuiz(){

    this.data.saveData('questions');
    this.flag = true;
    this.data.validationFlag = true;

  }

  loadQuiz(){
    this.data.loadData('questions');
  }

  newQuestion(){

    let question = new Question();
    this.data.questionslist.push(question)
    console.log(this.data.questionslist)
    this.flag = false;
    this.data.validationFlag = false;

  }

  

  createLink(){

    this.link = 'https://quizems-daf82.firebaseapp.com/#/quiz'; 
    //this.router.navigate(['/quiz']);
    
    
      }

  scrollPage(){

        window.scrollTo(0,1000);

      }
    

  }


