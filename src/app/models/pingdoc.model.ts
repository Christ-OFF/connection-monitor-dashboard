/*
  This is the document we store inside CouchDB
 */
export interface PingdocModel {
  dns: string;
  dns2: string;
  latency: string;      // in ms XX.YYY
  latency2: string;
  packetloss: string;   // 0 to 100
  packetloss2: string;
  web: string;
}
