import { DataService } from "./data.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  
export class Model {

    //myQuestion : any;

    constructor(private data : DataService){


    }

    id: number;
    question : string
    answer: any;
  }