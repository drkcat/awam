import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../models/event.model'
import { Subject } from 'rxjs/Subject';
import { EventColor, CalendarEvent, WeekDay, MonthView, MonthViewDay } from 'calendar-utils';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input() events: Array<Event>;
  calendarEvents: CalendarEvent[] = [];
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();


  constructor() { }

  ngOnInit() {
    for(let event of this.events){
      for(let day of event.schedule){
        let calendarEvent: CalendarEvent;
        calendarEvent.start = day.start
        calendarEvent.end = day.end
        calendarEvent.title = event.name
        calendarEvent.color = colors.red
        this.calendarEvents.push(calendarEvent)
      }
    }

  }

}