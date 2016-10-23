/*
  This is the document we store inside CouchDB
 */
export interface PingdocModel {
  dns: string;
  latency: number;      // in ms XX.YYY
  packetloss: number;   // 0 to 100
  web: string;
}
