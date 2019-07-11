import { Injectable } from '@angular/core';
import {Model} from "src/app/question-answer.model";
import { Question } from './question.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  professorQuestion : any;
  questionslist : Array <Question>;
  interval;
  flag = true;
  flag2 = true;
  timeLeft: number = 3000
  validationFlag = false;

  constructor() {

    this.questionslist= new Array<Question>();
    }

    removeQues(question : Question){

      this.questionslist.splice(this.questionslist.indexOf(question, 1));
    
    }

    startTimer(timeLeft) {

      this.timeLeft = timeLeft;
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
      localStorage.setItem(key, value);
      console.log(value)
    }
  
    loadData(key: string){
      this.questionslist = JSON.parse(localStorage.getItem(key))['data'];
      console.log(this.questionslist);
    }

  }


