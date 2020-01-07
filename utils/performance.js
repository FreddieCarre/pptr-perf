const Influx = require('influx');

const influx = new Influx.InfluxDB({
  host: 'localhost',
  port: 8086,
  database: 'puppeteer'
});

/**
 * 
 * @param {*} client - Puppeteer client generated using page.target().createCDPSession();
 * @param {*} title - The measurement name to be recorded in InfluxDB.
 */
const sendData = async (client, title) => {
  const data = await getMetrics(client, 'ScriptDuration', 'FirstMeaningfulPaint', 'DomContentLoaded');
  await influx.writeMeasurement(title,
    [{ fields: data }]
  );
};

const getMetrics = async (client, ...dataNames) => {
  const data = await client.send('Performance.getMetrics');
  console.log(data)
  const navStart = getTimeFromMetrics(data, 'NavigationStart');

  const extractedData = {};
  dataNames.forEach(name => {
    extractedData[name] = getTimeFromMetrics(data, name) - navStart
  });

  return extractedData;
};

/**
 * Extracts the named metric from the metrics object. Converts timestamp to ms.
 * 
 * @param {{string: Number}} metrics - object containing name: value pairs for each timestamp.
 * @param {string} name - the specific metric to be extracted.
 */
const getTimeFromMetrics = (metrics, name) => 
  metrics.metrics.find(x => x.name === name).value * 1000;

module.exports = {
  getMetrics,
  sendData
}
