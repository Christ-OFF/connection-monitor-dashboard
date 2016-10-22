import { PingModel } from './ping.model';
export interface CouchDBModel {
  // We wan't to map
  // {"total_rows":553,"offset":0,"rows":[ PINGS_HERE  ]}
  total_rows: number;
  offset: number;               // not used yet
  //rows: Array<PingModel>;
}

