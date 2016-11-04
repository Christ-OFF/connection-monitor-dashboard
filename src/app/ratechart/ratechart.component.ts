import {Component, OnInit} from '@angular/core';
import {Basechart} from '../basechart';
import {PingService} from '../ping.service';
import {CouchDBModel} from '../models/couchdb.model';

@Component({
  selector: 'cmd-ratechart',
  templateUrl: './ratechart.component.html',
  styleUrls: ['./ratechart.component.css']
})
export class RatechartComponent extends Basechart implements OnInit {

  constructor(protected pingService: PingService) {
    super(pingService);
    this.lineChartData = [
      {data: [], label: 'Download', fill: true, spanGaps: true},
      {data: [], label: 'Upload', fill: true, spanGaps: true}
    ];

    this.lineChartColors = [
      { // Download
        backgroundColor: 'rgba(96, 189, 104, 0.2)',
        borderColor: 'rgba(96, 189, 104, 1)',
      },
      { // Upload
        backgroundColor: 'rgba(241, 88, 84, 0.2)',
        borderColor: 'rgba(241, 88, 84, 1)'
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
      if (ping.doc.download === '' || ping.doc.download === '0') {
        this.lineChartData[0].data.push(null);
      } else {
        this.lineChartData[0].data.push(ping.doc.download);
      }
      if (ping.doc.upload === '' || ping.doc.upload === '0') {
        this.lineChartData[1].data.push(null);
      } else {
        this.lineChartData[1].data.push(ping.doc.upload);
      }
    }
  }

}
