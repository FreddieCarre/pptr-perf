import * as Influx from 'influx';
import { influxConfig } from '../config/influx';

export const influx = () => new Influx.InfluxDB({
  host: influxConfig.host,
  port: influxConfig.port,
  database: influxConfig.databaseName
});

