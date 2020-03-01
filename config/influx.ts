interface InfluxConfig {
  host: string;
  port: number;
  databaseName: string;
};

export const influxConfig: InfluxConfig = {
  host: 'localhost',
  port: 8086,
  databaseName: 'puppeteer'
};
