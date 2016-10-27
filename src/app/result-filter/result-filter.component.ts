import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as moment from 'moment';

export interface StartEndDate {
  startDate: Date;
  endDate: Date;
}

@Component({
  selector: 'cmd-result-filter',
  templateUrl: './result-filter.component.html',
  styleUrls: ['./result-filter.component.css']
})
export class ResultFilterComponent implements OnInit {

  @Input() set startDate(value: Date){
    this.startDateText = moment(value).format(this.DATE_FORMAT);
  }

  @Input() set endDate(value: Date){
    this.endDateText = moment(value).format(this.DATE_FORMAT);
  }

  @Output() filterSubmitted: EventEmitter<StartEndDate> = new EventEmitter<StartEndDate>();

  DATE_FORMAT: string = 'DD/MM/YYYY HH:mm';
  PATTERN: string = '[0-9]{2}/[0-9]{2}/[0-9]{4} [0-9]{2}:[0-9]{2}';

  /**
   * Internal string representation of start and end date
   */
  startDateText: string;
  endDateText: string;

  constructor() { }

  ngOnInit() {
  }

  doFilter() {
    // Parse
    let startDateOut: Date = moment(this.startDateText, this.DATE_FORMAT).toDate();
    let endDateOut:Date = moment(this.endDateText, this.DATE_FORMAT).toDate();
    // Emit
    this.filterSubmitted.emit({
      startDate: startDateOut,
      endDate: endDateOut
    });
  }

}
