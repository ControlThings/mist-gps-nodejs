# Mist GPS 

*This project is no longer maintained. Required dependencies may no longer be available.*

*See: mist-examples-nodejs (https://github.com/ControlThings/mist-examples-nodejs)*

This is bleeding egde software and WILL BREAK from time to time, you have been warned.

This package is dependent on the mist-api package, which currently is working with Linux x64, OSX x64 and Raspberry Pi, on nodejs v6.x only. To get it working you also need to run a Wish Core on the same host.

## Prerequisites

*If you ended up here by accident, you might not get this to work.*

To access the GPS you need to access the MistApi. You may do that using a Mist Ui, Cli or programmatically using mist-api node.js package. 

### Option 1: Android Ui

An easy option is to install the MistUi Android app. You need the following apps:

* Wish - Peer-to-peer trustbased networking layer 
* Mist - IoT layer for Wish 

You may like to follow the instructions for the GPS specific Ui: https://github.com/ControlThings/mist-gps-ui-android, as they explain how to get it up and running. You only need to install Wish and Mist apk packages.

### Option 2: Command line tool

Check out https://www.npmjs.com/package/mist-cli

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


