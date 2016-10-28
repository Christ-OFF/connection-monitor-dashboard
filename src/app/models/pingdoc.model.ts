/*
  This is the document we store inside CouchDB
 */
export interface PingdocModel {
  dns: string;
  latency: string;      // in ms XX.YYY
  packetloss: string;   // 0 to 100
  web: string;
}
