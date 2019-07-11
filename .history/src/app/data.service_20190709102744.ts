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
  validationFlag = false;
  timeLeft : number = 50;

  constructor() {

    this.questionslist= new Array<Question>();
    }

    removeQues(question : Question){

      this.questionslist.splice(this.questionslist.indexOf(question, 1));
      console.log(this.questionslist)
    
    }

    startTimer(timeLeft : number) {

      this.timeLeft = timeLeft;
      console.log(timeLeft)

  
      this.interval = setInterval(() => {
        console.log(this.timeLeft)
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

    saveTime(key1: string){
      const value1 = JSON.stringify(this.arrayToJSON(this.timeLeft));
      localStorage.setItem(key1, value1);
      console.log(value1)
    }
  
    loadData(key: string){
      this.questionslist = JSON.parse(localStorage.getItem(key))['data'];
      console.log(this.questionslist);
    }

  }


