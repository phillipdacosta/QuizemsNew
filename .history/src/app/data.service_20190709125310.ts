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
  timeLeft : any;
  key1 : any  = 'key1';
  updatedTime : any;
  constructor() {

    this.questionslist= new Array<Question>();
    }

    removeQues(question : Question){

      this.questionslist.splice(this.questionslist.indexOf(question, 1));
      console.log(this.questionslist)
    
    }

    startTimer(timeLeft : number) {

      
      localStorage.getItem('key1')
      this.timeLeft = JSON.parse(localStorage.getItem('key1'));


  

      console.log(this.timeLeft)


  
      this.interval = setInterval(() => {
        console.log(this.timeLeft)
        this.updatedTime = this.timeLeft;  
        if(this.updatedTime > 0) {
        var date = new Date(this.timeLeft * 1000).toISOString().substr(11, 8);
          this.updatedTime = date;
          this.updatedTime--;
        
   
          if(this.timeLeft == 0) {
   
            this.flag = false;
 
            
          }
   
        } else {
          timeLeft ;
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


