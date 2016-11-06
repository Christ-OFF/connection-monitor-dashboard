import { Component, OnInit } from '@angular/core';
import { PingService } from '../ping.service';

@Component({
  selector: 'cmd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  measureIsOk: boolean;
  dnsIsOk: boolean;
  dns2IsOk: boolean;
  webIsOk: boolean;
  latency: number;
  latency2: number;
  packetloss: number;
  packetloss2: number;

  constructor(private pingService: PingService) { }

  ngOnInit() {
    this.pingService.lastFresh().subscribe(receivedPings => {
        if (receivedPings.rows.length > 0) {
          this.measureIsOk = true;
          this.dnsIsOk = receivedPings.rows[0].doc.dns === 'true';
          this.dns2IsOk = receivedPings.rows[0].doc.dns2 === 'true';
          this.latency = parseFloat(receivedPings.rows[0].doc.latency);
          this.latency2 = parseFloat(receivedPings.rows[0].doc.latency2);
          this.webIsOk = receivedPings.rows[0].doc.web === 'true';
          this.packetloss = parseInt(receivedPings.rows[0].doc.packetloss, 10);
          this.packetloss2 = parseInt(receivedPings.rows[0].doc.packetloss2, 10);
        }
    });
  }

}
