import {Component, OnInit, Input, AfterContentInit} from '@angular/core';

@Component({
  selector: 'cmd-dnsindicator',
  templateUrl: './dnsindicator.component.html',
  styleUrls: ['./dnsindicator.component.css']
})
export class DnsindicatorComponent{

  @Input() set dns1(value : boolean){
    if (value) {
      this.level++;
    }
  }

  @Input() set dns2(value: boolean){
    if (value) {
      this.level++;
    }
  }

  @Input() size: string;

  level = 0;

  constructor() { }

}
