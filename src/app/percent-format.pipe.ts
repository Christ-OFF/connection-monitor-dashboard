import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentFormat'
})
export class PercentFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == null) {
      return 'N/A';
    } else {
      return value + ' %';
    }
  }

}
