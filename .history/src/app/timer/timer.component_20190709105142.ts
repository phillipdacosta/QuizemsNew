import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {


  constructor(private data : DataService) { }

  ngOnInit() {

    this.data.startTimer(this.data.timeLeft)
  }



}
