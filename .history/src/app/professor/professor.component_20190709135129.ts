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
  key1 : any = 'key1'
  key2 : any = 'key2'
  key3 : any = 'key3'

  @Input() professorName : any;
  @Input() className : any;
  @Input() time : any;


  constructor(private data : DataService) { }


  ngOnInit() {

    window.scrollTo(0, 9500);


  }

  populateQuiz(){

    this.data.saveData('questions');
    this.flag = true;
    this.data.validationFlag = true;
    //this.data.startTimer(this.time)
    this.data.timeLeft = this.time
    localStorage.setItem(this.key1, this.time)
    this.data.startTimer(this.time)
    localStorage.setItem(this.key2, this.professorName)
    localStorage.setItem(this.key3, this.className)
    this.data.saveProfAndClass(this.professorName, this.className);

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


