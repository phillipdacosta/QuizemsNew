import { Injectable } from '@angular/core';
import {Model} from "src/app/question-answer.model";
import { Question } from './question.model';
import { Quizname } from './quizname.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  professorQuestion : any;
  questionslist : Array <Question>;
  quizAndProfessorName : Array <Question>;

  interval;
  flag = true;
  flag2 = true;
  timeLeft: number = 10;

  constructor() {

    this.questionslist= new Array<Question>();
    this.quizAndProfessorName = new Array<Question>();


    }

    removeQues(question : Question){

      this.questionslist.splice(this.questionslist.indexOf(question, 1));
    
    }



    startTimer() {
      this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
          this.timeLeft--;
   
          if(this.timeLeft == 0) {
   
            this.flag = false;
 
            
          }
   
        } else {
          this.timeLeft ;
        }
      },1000)
   
    
    
    }

    arrayToJSON(array){
        return {"data": array};
    }

    saveData(key: string){
      const value = JSON.stringify(this.arrayToJSON(this.questionslist));
      const value1 = JSON.stringify(this.arrayToJSON(this.quizAndProfessorName));

      localStorage.setItem(key, value);
      localStorage.setItem(key, value1);

      console.log(value)
    }
  
    loadData(key: string){
      this.questionslist = JSON.parse(localStorage.getItem(key))['data'];
      this.quizAndProfessorName = JSON.parse(localStorage.getItem(key))['data'];

      console.log(this.questionslist);
    }

  }


