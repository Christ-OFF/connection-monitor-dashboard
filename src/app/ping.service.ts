import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CouchDBModel } from './models/couchdb.model';

@Injectable()
export class PingService {

  constructor(private http: Http) {}

  list(): Observable<CouchDBModel> {
    return this.http.get('http://192.168.1.183:8080/ping/_all_docs?include_docs=true').map( response => response.json() );
  }

}
