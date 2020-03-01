import { CDPSession } from 'puppeteer';
import { influx } from './influx';
import { INFO } from './logging';

interface Metric {
  name: string;
  value: number;
};

interface Metrics {
  metrics: [ Metric ];
};

const getMetrics = async (client: CDPSession, ...dataNames: string[]) => {
  const data = await client.send('Performance.getMetrics') as Metrics;
  const navStart = getTimeFromMetrics(data, 'NavigationStart');
  console.log(data)
  INFO(`NavigationStart = ${navStart}`);
  const extractedData: any = {};
  
  dataNames.forEach(name => {
    const time = getTimeFromMetrics(data, name);
    if ( time > navStart ) {
      extractedData[name] = time - navStart;
    } else {
      extractedData[name] = time;
    };
  });

  return extractedData;
};

/**
 * Extracts the named metric from the metrics object. Converts timestamp to ms.
 * 
 * @param {{string: Number}} metrics - object containing name: value pairs for each timestamp.
 * @param {string} name - the specific metric to be extracted.
 */
const getTimeFromMetrics = (metrics: Metrics, name: string): number => {
  const metric = metrics.metrics.find((x: Metric) => x.name === name);
  if (metric) {
    return metric.value * 1000;
  };
  throw new Error(`Could not find metric with name ${name}`);
};

/**
* Captures the performance metrics and writes them to Influx.
* 
* @param {*} client - Puppeteer client generated using page.target().createCDPSession();
* @param {*} title - The measurement name to be recorded in InfluxDB.
*/
export const sendData = async (client: CDPSession, title: string) => {
  const data = await getMetrics(client, 'FirstMeaningfulPaint', 'DomContentLoaded');

  INFO(data);
  
  Object.entries(data).forEach(async ([name, value]) => {
    await influx().writeMeasurement(title, [{ 
      tags: { name },
      fields: { value } 
    }]);
  });
};
