import { Component, OnInit } from '@angular/core';
import { PingService } from '../ping.service';
import { CouchDBModel } from '../models/couchdb.model';

@Component({
  selector: 'cmd-pingslist',
  templateUrl: './pingslist.component.html',
  styleUrls: ['./pingslist.component.css']
})
export class PingslistComponent implements OnInit {

  // Initialize with empty object so the view will work anyway
  pings: CouchDBModel = { total_rows: 0, offset: 0 , rows: [] };

  constructor(private pingService: PingService ) { }

  ngOnInit() {
      this.pingService.list().subscribe( receivedPings => this.pings = receivedPings );
  }

}
