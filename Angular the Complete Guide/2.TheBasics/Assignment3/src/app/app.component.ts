import { Component, ɵConsole } from '@angular/core';
import { time } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  buttonToggle = false;
  buttonLog= {
    id: 0,
    time: 0,
  };
  buttonLogArr = [];

  toggleButton = () => {
    this.buttonToggle = !this.buttonToggle;
  }
  logButton = (event) => {
    let buLog = {
      ...this.buttonLog
    }
    this.buttonLog.id = buLog.id + 1;
    buLog.id = buLog.id + 1;
    buLog.time = event.timeStamp;
    this.buttonLogArr.push(buLog);
  }
  getColor = () => {
    return this.buttonLog.id < 5 ? 'white': 'blue';


  }
}
