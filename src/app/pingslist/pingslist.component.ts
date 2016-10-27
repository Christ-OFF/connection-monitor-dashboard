import { Component, OnInit } from '@angular/core';
import { PingService } from '../ping.service';
import { CouchDBModel } from '../models/couchdb.model';
import * as moment from 'moment';
import {StartEndDate} from "../result-filter/result-filter.component";

/**
 * We query only the 2 last hours
 * @type {number}
 */
const RANGE: number = 2;

@Component({
  selector: 'cmd-pingslist',
  templateUrl: './pingslist.component.html',
  styleUrls: ['./pingslist.component.css']
})
export class PingslistComponent implements OnInit {

  // Initialize with empty object so the view will work anyway
  pings: CouchDBModel = { total_rows: 0, offset: 0 , rows: [] };

  currentStartDate: Date;
  currentEndDate: Date;

  // the follwing date will be obtained from pingService
  minDate: Date;
  // the follwing date will be obtained from pingService
  maxDate: Date;

  constructor(private pingService: PingService ) { }

  ngOnInit() {
    // Dates
    this.currentEndDate = new Date();
    this.currentStartDate = moment().subtract(RANGE,'hour').toDate();
    // TODO get min and max date
    // refresh
    this.refresh();
  }

  /**
   * compute the date range and query
   */
  refresh(): void {
    this.pingService.list(
      this.currentStartDate,
      this.currentEndDate)
      .subscribe( receivedPings => this.pings = receivedPings );
  }

  filterList(value: StartEndDate): void {
    this.currentStartDate = value.startDate;
    this.currentEndDate = value.endDate;
    this.refresh();
  }

}
