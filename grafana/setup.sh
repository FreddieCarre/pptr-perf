sleep 5

echo "\n"'\033[0;32m'"Connecting to InfluxDB..."
curl -s localhost:3000/api/datasources \
  -u "admin:admin" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"id": 1,"orgId": 1,"name": "InfluxDB","type": "influxdb","typeLogoUrl": "public/app/plugins/datasource/influxdb/img/influxdb_logo.svg","access": "proxy","url": "http://influxdb:8086","password": "root","user": "root","database": "puppeteer","basicAuth": false,"isDefault": true,"jsonData": {},"readOnly": false}'
echo "\n"'\033[0;32m'"Connected to InfluxDB"

echo "\n"'\033[0;32m'"Creating Dashboard..."
curl -s localhost:3000/api/dashboards/db \
  -X POST \
  -u "admin:admin" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"dashboard":{"annotations":{"list":[{"builtIn":1,"datasource":"-- Grafana --","enable":true,"hide":true,"iconColor":"rgba(0, 211, 255, 1)","name":"Annotations & Alerts","type":"dashboard"}]},"editable":true,"gnetId":null,"graphTooltip":0,"id":null,"links":[],"panels":[{"aliasColors":{},"bars":false,"dashLength":10,"dashes":false,"datasource":null,"fill":1,"fillGradient":0,"gridPos":{"h":9,"w":12,"x":0,"y":0},"hiddenSeries":false,"id":2,"legend":{"alignAsTable":true,"avg":true,"current":false,"max":true,"min":true,"rightSide":true,"show":true,"total":false,"values":true},"lines":true,"linewidth":1,"nullPointMode":"null","options":{"dataLinks":[]},"percentage":false,"pointradius":2,"points":false,"renderer":"flot","seriesOverrides":[],"spaceLength":10,"stack":false,"steppedLine":false,"targets":[{"alias":"$tag_name","groupBy":[{"params":["name"],"type":"tag"}],"measurement":"launch_homepage","orderByTime":"ASC","policy":"default","refId":"A","resultFormat":"time_series","select":[[{"params":["*"],"type":"field"}]],"tags":[]}],"thresholds":[],"timeFrom":null,"timeRegions":[],"timeShift":null,"title":"Launch homepage","tooltip":{"shared":true,"sort":0,"value_type":"individual"},"transparent":true,"type":"graph","xaxis":{"buckets":null,"mode":"time","name":null,"show":true,"values":[]},"yaxes":[{"format":"short","label":null,"logBase":1,"max":null,"min":null,"show":true},{"format":"short","label":null,"logBase":1,"max":null,"min":null,"show":true}],"yaxis":{"align":false,"alignLevel":null}}],"schemaVersion":22,"style":"dark","tags":[],"templating":{"list":[]},"time":{"from":"now-5m","to":"now"},"timepicker":{"refresh_intervals":["5s","10s","30s","1m","5m","15m","30m","1h","2h","1d"]},"timezone":"","title":"New dashboard","uid":null,"version":0}}'
echo "\n"'\033[0;32m'"Dashboard was created"

echo "\n"'\033[0;32m'"Setup complete... visit http://localhost:3000"
exit 0