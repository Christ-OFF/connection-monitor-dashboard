import { PingService } from './ping.service';
import * as moment from 'moment';
import { CouchDBModel } from './models/couchdb.model';
import { OnInit } from '@angular/core';
/**
 * This class will old all common chart variables and behaviors
 */



export abstract class Basechart implements OnInit {

  public static DATE_FORMAT = 'DD/MM/YYYY HH:mm';

  currentStartDate: Date;
  currentEndDate: Date;

  /**
   * Common chart options "static"
   */
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  /**
   * Common chart variables
   */
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [];
  public lineChartColors: Array<any> = [];

  constructor(protected pingService: PingService) {

  }

  abstract handle(received: CouchDBModel);

  ngOnInit() {
    this.currentEndDate = new Date();
    this.currentStartDate = moment().subtract(1, 'days').toDate();
    this.pingService.list(
      this.currentEndDate,
      this.currentStartDate,
      false)
      .subscribe(receivedPings => this.handle(receivedPings));
  }

  public formatDate(id:  number): string {
    return moment(id.toString(10), 'X').format(Basechart.DATE_FORMAT);
  }


}
