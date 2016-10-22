import { Component, OnInit } from '@angular/core';
import { PingService } from '../ping.service';
import { CouchDBModel } from '../models/couchdb.model';

@Component({
  selector: 'cmd-pingslist',
  templateUrl: './pingslist.component.html',
  styleUrls: ['./pingslist.component.css']
})
export class PingslistComponent implements OnInit {

  pings: any = null;

  constructor(private pingService: PingService ) { }

  ngOnInit() {
      this.pingService.list().subscribe( receivedPings => {
        this.pings = receivedPings;
        console.log(this.pings);
      } );
  }

}
