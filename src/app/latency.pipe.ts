import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'latency'
})
export class LatencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ( value == null || value.toString() === '' ) {
      return 'N/A';
    } else {
      return value.toString() + ' ms';
    }
  }

}
