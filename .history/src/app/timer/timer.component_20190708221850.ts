import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() time : number;

  constructor(private data : DataService) { }

  ngOnInit() {
  }

  startTimer(){

    this.data.startTimer(this.time);
  }

}
