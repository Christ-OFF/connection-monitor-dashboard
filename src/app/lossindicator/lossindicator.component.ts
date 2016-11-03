import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'cmd-lossindicator',
  templateUrl: './lossindicator.component.html',
  styleUrls: ['./lossindicator.component.css']
})
export class LossindicatorComponent {

  @Input() set loss1( value: number){
    if (value != null) {
      this.packetLoss += value;
      this.count++;
    }
  }
  @Input() set loss2(value : number){
    if (value != null) {
      this.packetLoss += value;
      this.count++;
    }
  }

  private packetLoss = 0.0;
  private count = 0;

  get loss(): string {
    if (this.count == 0){
      return 'N/A';
    } else {
      return this.packetLoss / this.count + ' %';
    }
  }

  constructor() { }

}
