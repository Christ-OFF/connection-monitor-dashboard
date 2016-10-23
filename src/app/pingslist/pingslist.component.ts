import { Component, OnInit } from '@angular/core';
import { PingService } from '../ping.service';
import { CouchDBModel } from '../models/couchdb.model';
import * as moment from 'moment';

/**
 * We query only the 2 last hours
 * @type {number}
 */
const HOUR_RANGE: number = 2;

@Component({
  selector: 'cmd-pingslist',
  templateUrl: './pingslist.component.html',
  styleUrls: ['./pingslist.component.css']
})
export class PingslistComponent implements OnInit {

  // Initialize with empty object so the view will work anyway
  pings: CouchDBModel = { total_rows: 0, offset: 0 , rows: [] };

  constructor(private pingService: PingService ) { }

  /**
   * compute the date range and query
   */
  refresh() : void {
    this.pingService.list(
        moment(),
        moment().subtract(HOUR_RANGE,"hour"))
      .subscribe( receivedPings => this.pings = receivedPings );
  }

  ngOnInit() {
    this.refresh();
  }

}
