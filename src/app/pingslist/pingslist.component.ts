import { Component, OnInit } from '@angular/core';
import { PingService } from '../ping.service';
import { CouchDBModel } from '../models/couchdb.model';
import * as moment from 'moment';
import { StartEndDate } from '../result-filter/result-filter.component';

@Component({
  selector: 'cmd-pingslist',
  templateUrl: './pingslist.component.html',
  styleUrls: ['./pingslist.component.css']
})
export class PingslistComponent implements OnInit {

  /**
   * Underlying data
   * We use getter and setter to compute stats
   * We Initialize with empty object so the view will work anyway
   * @type {{total_rows: number; offset: number; rows: Array}}
   * @private
   */
  private _pings: CouchDBModel = {total_rows: 0, offset: 0, rows: []};
  /**
   * Addtionnal data computed when a new model is set
   */
  private _count: number = 0;
  private _avgLatency: number = 0;

  get pings(): CouchDBModel {
    return this._pings;
  }

  set pings(value: CouchDBModel) {
    this._pings = value;
    this._count = value.rows.length;
    if (this._count !== 0) {
      let total: number = value.rows
        .map( x => parseFloat(x.doc.latency) )
        .reduce(function (acc, x) {
          return 0.0 + acc + x;
        });
      this._avgLatency = ( total / this._count ) ;
    } else {
      this._avgLatency = 0;
    }
  }

  get avgLatency(): number { return this._avgLatency; }
  get count(): number { return this._count; }

  currentStartDate: Date;
  currentEndDate: Date;

  // the follwing date will be obtained from pingService
  minDate: Date;
  // the follwing date will be obtained from pingService
  maxDate: Date;

  constructor(private pingService: PingService) {
  }

  ngOnInit() {
    this.refresh2Hours();
  }

  /**
   * compute the date range and query
   */
  refresh(): void {
    this.pingService.list(
      this.currentStartDate,
      this.currentEndDate)
      .subscribe(receivedPings => this.pings = receivedPings);
  }

  filterList(value: StartEndDate): void {
    this.currentStartDate = value.startDate;
    this.currentEndDate = value.endDate;
    this.refresh();
  }

  computeDates(nbHours: number) {
    this.currentEndDate = new Date();
    this.currentStartDate = moment().subtract(nbHours, 'hour').toDate();
  }

  refreshHour(): void {
    this.computeDates(1);
    this.refresh();
  }

  refresh2Hours(): void {
    this.computeDates(2);
    this.refresh();
  }

}
