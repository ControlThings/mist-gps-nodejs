# Mist GPS 

Dependent on the mist-api package, which currently is working with Linux x64 and nodejs v6.x only. To get it working you also need to run a Wish Core on the same host. The Wish Core linux-x64 executable can be downloaded https://mist.controlthings.fi/dist/wish-core-v0.6.6-stable3-linux-x64.

## Prerequisits

Download and run wish-core (https://mist.controlthings.fi/dist/wish-core-v0.6.6-stable3-linux-x64).

```sh
./wish-core-v0.6.6-stable3-linux-x64
```

To access the GPS you need to access the MistApi. You may do that using a Mist Ui, Cli or programmatically using mist-api node.js package. An easy option is to install the MistUi Android app. You need the following apps:

* Wish - Peer-to-peer trustbased networking layer 
* Mist - IoT layer for Wish 

You may like to follow the instructions for the GPS specific Ui: https://github.com/ControlThings/mist-gps-ui-android, as they explain how to get it up and running. You only need to install Wish and Mist apk packages.

## Install and run

```sh
node --version #should return 6.x
npm install -g mist-gps
mist-gps
```

## Develop

```sh
git clone https://github.com/ControlThings/mist-gps-nodejs.git
cd mist-gps-nodejs
npm install
node --version #should return 6.x
node run
```


