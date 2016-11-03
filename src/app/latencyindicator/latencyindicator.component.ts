import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'cmd-latencyindicator',
  templateUrl: './latencyindicator.component.html',
  styleUrls: ['./latencyindicator.component.css']
})
export class LatencyindicatorComponent implements OnInit {

  @Input() set latency1(value: string) {
    if (value != null) {
      this.totalLatency += parseFloat(value);
      this.count++;
    }
  }
  @Input() latency2: string;

  private totalLatency = 0.0;
  private count = 0;

  get latency(): string {
    if (this.count === 0) {
      return 'N/A';
    } else {
      return ( this.totalLatency / this.count ).toFixed(3) + ' ms';
    }
  }

  constructor() {
  }

  ngOnInit() {
    if (this.latency2 != null) {
      this.totalLatency += parseFloat(this.latency2);
      this.count++;
    }
  }

}
