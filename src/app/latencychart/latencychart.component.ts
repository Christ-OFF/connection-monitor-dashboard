import {Component, OnInit} from '@angular/core';
import {PingService} from '../ping.service';
import {CouchDBModel} from '../models/couchdb.model';
import {Basechart} from '../basechart';

@Component({
  selector: 'cmd-latencychart',
  templateUrl: './latencychart.component.html',
  styleUrls: ['./displaychart.component.css']
})
export class LatencychartComponent extends Basechart implements OnInit {

  constructor(protected pingService: PingService) {
    super(pingService);
    this.lineChartData = [
      {data: [], label: 'Latency1', fill: false, spanGaps: false},
      {data: [], label: 'Latency2', fill: false, spanGaps: false}
    ];

    this.lineChartColors = [
      { // Latency 1
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
      },
      { // Latency 2
        backgroundColor: 'rgba(93, 165, 218, 0.2)',
        borderColor: 'rgba(93, 165, 218, 1)'
      },
    ];
  }

  ngOnInit() {
    super.ngOnInit();
  }

  /**
   * Main method : create necessayry time series from
   * @param received
   */
  handle(received: CouchDBModel) {
    this.lineChartLabels = [];
    for (let ping of received.rows) {
      this.lineChartLabels.push(this.formatDate(ping.id));
      if (ping.doc.latency === '' || ping.doc.latency === '0') {
        this.lineChartData[0].data.push(null);
      } else {
        this.lineChartData[0].data.push(ping.doc.latency);
      }
      if (ping.doc.latency2 === '' || ping.doc.latency2 === '0') {
        this.lineChartData[1].data.push(null);
      } else {
        this.lineChartData[1].data.push(ping.doc.latency2);
      }
    }
  }

}
