import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {PingService} from '../ping.service';
import {CouchDBModel} from '../models/couchdb.model';

const DATE_FORMAT = 'DD/MM/YYYY HH:mm';

@Component({
  selector: 'cmd-displaychart',
  templateUrl: './displaychart.component.html',
  styleUrls: ['./displaychart.component.css']
})
export class DisplaychartComponent implements OnInit {

  currentStartDate: Date;
  currentEndDate: Date;

  // lineChart
  public lineChartData: Array<any> = [
    {data: [], label: 'Latency', fill: false},
    {data: [], label: 'Latency2', fill: false}
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  constructor(private pingService: PingService) { }

  ngOnInit() {
    this.currentEndDate = new Date();
    this.currentStartDate = moment().subtract(1, 'days').toDate();
    this.pingService.list(
      this.currentEndDate,
      this.currentStartDate,
      false)
      .subscribe(receivedPings => this.handle(receivedPings));
  }

  /**
   * Main method : create necessayry time series from
   * @param received
   */
  handle(received: CouchDBModel) {
    this.lineChartLabels = [];
    for (let ping of received.rows) {
      this.lineChartLabels.push( moment(ping.id.toString(10), 'X').format(DATE_FORMAT) );
      if (ping.doc.latency === '0') {
        this.lineChartData[0].data.push(null);
      } else {
        this.lineChartData[0].data.push(ping.doc.latency);
      }
      if (ping.doc.latency2 === '0') {
        this.lineChartData[1].data.push(null);
      } else {
        this.lineChartData[1].data.push(ping.doc.latency2);
      }
    }
  }

}
