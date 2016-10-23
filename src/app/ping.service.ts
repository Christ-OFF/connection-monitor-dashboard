import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CouchDBModel } from './models/couchdb.model';
import * as moment from 'moment';
/**
 * Let's start with some constants to make couchdb url easier to build
 * @type {string}
 */
const BASE_URL: string = 'http://192.168.1.183:8080/ping/_all_docs';
const INCLUDE_DOCS: string = 'include_docs=true';
const DESCENDING: string = 'descending=true';
const STARTKEY: string = 'startkey=';
const ENDKEY: string = 'endkey=';
/**
 * To avoid returning to many elements
 * 1000 is more than 3 days with one measure every 5 minutes
 */
const HARD_LIMIT: string = 'limit=1000';

@Injectable()
export class PingService {

  constructor(private http: Http) {}

  /**
   * keys are unix time in seconds
   * @param date
   */
  private convertDateToKey(date: moment.Moment): string {
    return date.format('x');
  }

  /**
   * We need to query ther underlying service
   *  /ping/_all_docs?include_doc s=true&descending=true&startkey=%221477252601%22&endkey=%221477251301%22
   * @returns {Observable<R>}
   */
  list(start : moment.Moment = null, end : moment.Moment = null): Observable<CouchDBModel> {
    let url: string = BASE_URL
      + '?' + INCLUDE_DOCS
      + '&' + DESCENDING
      + '&' + HARD_LIMIT;
    if (start != null){
      url = url + '&' + STARTKEY + '"' + this.convertDateToKey(start) + '"';
    }
    if (end != null){
      url = url + '&' + ENDKEY + '"' + this.convertDateToKey(end) + '"';
    }
    return this.http.get(url).map( response => response.json() );
  }

}
