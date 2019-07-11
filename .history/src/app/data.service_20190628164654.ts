import { Injectable } from '@angular/core';
import {Model} from "src/app/question-answer.model";
import { Question } from './question.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  professorQuestion : any;
  questionslist : Array <Question>;

  constructor() {

    this.questionslist= new Array<Question>();


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


