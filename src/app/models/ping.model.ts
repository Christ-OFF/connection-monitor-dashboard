import { PingdocModel } from './pingdoc.model';

/*
    A row in a CouchDB response has an id and if requested a doc(ument)
 */
export interface PingModel {
  id: number;  // id is a number but remember that it is a datetime
  doc: PingdocModel;
}
