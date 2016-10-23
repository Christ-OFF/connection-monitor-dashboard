import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment(parseInt(value, 10) * 1000).format('D/MM/YYYY HH:mm');
  }

}
