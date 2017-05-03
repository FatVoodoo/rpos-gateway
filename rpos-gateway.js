"use strict";
require("./lib/extension");
var http = require("http");
var express = require("express");
var minimist = require("minimist");
var utils_1 = require("./lib/utils");
var DeviceService = require("./services/device_service");
var MediaService = require("./services/media_service");
var DiscoveryService = require("./services/discovery_service");
var utils = utils_1.Utils.utils;
var argv = minimist(process.argv.slice(2));
var pjson = require("./package.json");
var config;
var configPath = argv["config"] || "rposConfig.json";
if (configPath[0] != '/') {
    configPath = "./" + configPath;
}
try {
    config = require(configPath);
}
catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
        throw e;
    }
    utils.log.error("Could not find configuration file at %s", configPath);
    process.exit(1);
}
utils.log.level = config.logLevel;
config.DeviceInformation.SerialNumber = utils.getSerial();
config.DeviceInformation.FirmwareVersion = pjson.version;
utils.setConfig(config);
utils.testIpAddress();
for (var i in config.DeviceInformation) {
    utils.log.info("%s : %s", i, config.DeviceInformation[i]);
}
var webserver = express();
var httpserver = http.createServer(webserver);
var device_service = new DeviceService(config, httpserver);
var media_service = new MediaService(config, httpserver);
var discovery_service = new DiscoveryService(config);
device_service.start();
media_service.start();
discovery_service.start();

//# sourceMappingURL=rpos-gateway.js.map
