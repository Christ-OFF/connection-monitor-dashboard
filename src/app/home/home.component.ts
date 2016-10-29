import { Component, OnInit } from '@angular/core';
import { PingService } from '../ping.service';
import { CouchDBModel } from '../models/couchdb.model';

@Component({
  selector: 'cmd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _pings: CouchDBModel = {total_rows: 0, offset: 0, rows: []};

  get measureIsOk(): boolean {
    return this._pings.rows.length > 0;
  }

  get dnsIsOk(): boolean {
    return this._pings.rows.length > 0 && this._pings.rows[0].doc.dns === 'true';
  }

  get webIsOk(): boolean {
    return this._pings.rows.length > 0 && this._pings.rows[0].doc.web === 'true';
  }

  get latency(): number {
    if ( this._pings.rows.length > 0 ) {
      return parseFloat(this._pings.rows[0].doc.latency);
    } else {
      return 0.0;
    }
  }

  get packetloss(): number {
    if ( this._pings.rows.length > 0 ) {
      return parseInt(this._pings.rows[0].doc.packetloss, 10);
    } else {
      return 100;
    }
  }

  constructor(private pingService: PingService) { }

  ngOnInit() {
    this.pingService.lastFresh().subscribe(receivedPings => this._pings = receivedPings);
  }

}
