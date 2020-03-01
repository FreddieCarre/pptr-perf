Front End Performance Testing with Puppeteer
===

This project is to illustrate how to collect front end performance metrics using Puppeteer.

Requirements
---

* [Node](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/getting-started/install) - npm install -g yarn
* [Make](https://www.gnu.org/software/make/)
* [Docker](https://www.docker.com/)
* Unix environment - e.g. [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

Setup
---

* Install Node dependencies
`make install`

* Launch the Grafana, this also conifgures the Grafana instance and InfluxDB docker containers.
`make up`

* Login to Grafana 
    Navigate to `localhost:3000`
    Sign in with `admin` `admin`

* Run tests
`make test-local`

# Example metrics
```
{
  metrics: [
    { name: 'Timestamp', value: 15564.960674 },
    { name: 'AudioHandlers', value: 0 },
    { name: 'Documents', value: 21 },
    { name: 'Frames', value: 17 },
    { name: 'JSEventListeners', value: 173 },
    { name: 'LayoutObjects', value: 1331 },
    { name: 'MediaKeySessions', value: 0 },
    { name: 'MediaKeys', value: 0 },
    { name: 'Nodes', value: 2041 },
    { name: 'Resources', value: 85 },
    { name: 'ScriptPromises', value: 0 },
    { name: 'ContextLifecycleStateObservers', value: 0 },
    { name: 'V8PerContextDatas', value: 4 },
    { name: 'WorkerGlobalScopes', value: 0 },
    { name: 'UACSSResources', value: 0 },
    { name: 'RTCPeerConnections', value: 0 },
    { name: 'ResourceFetchers', value: 21 },
    { name: 'AdSubframes', value: 0 },
    { name: 'DetachedScriptStates', value: 2 },
    { name: 'LayoutCount', value: 131 },
    { name: 'RecalcStyleCount', value: 150 },
    { name: 'LayoutDuration', value: 0.05685 },
    { name: 'RecalcStyleDuration', value: 0.082366 },
    { name: 'ScriptDuration', value: 0.216701 },
    { name: 'V8CompileDuration', value: 0.011174 },
    { name: 'TaskDuration', value: 0.665655 },
    { name: 'TaskOtherDuration', value: 0.309738 },
    { name: 'ThreadTime', value: 0.604599 },
    { name: 'JSHeapUsedSize', value: 10016344 },
    { name: 'JSHeapTotalSize', value: 21540864 },
    { name: 'FirstMeaningfulPaint', value: 0 },
    { name: 'DomContentLoaded', value: 15564.152646 },
    { name: 'NavigationStart', value: 15563.583237 }
  ]
}
```
