import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Question } from '../question.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {


  question : any;
  link : any
  flag : boolean = false;
  @Input() time : number;


  constructor(private data : DataService) { }


  ngOnInit() {

    window.scrollTo(0, 40000);


  }

  saveEditedTime(){


    this.data.startTimer(this.time)
  // this.data.startTimer(this.time);
  }
  

  
  populateQuiz(){

    this.data.saveData('questions');
    this.flag = true;
    this.data.validationFlag = true;
    console.log(this.time)
    this.data.startTimer(this.time)
 

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


