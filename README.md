# rpos-gateway
Raspberry Pi Onvif Gateway based on [rpos](http://breeeze.github.io/rpos). Node.js based [ONVIF](http://www.onvif.org) SOAP service.

Providing a ONVIF Media service which is compatible with Synology Surveillance Station / QNAP NAS, "tunneling" any existing RTSP stream.

## How-To Install:

([Beginner’s Guide to](http://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/)) Installing Node.js on a Raspberry Pi:

```bash
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install nodejs
```

Download the latest rpos-gateway release from GitHub:

```bash
wget https://github.com/kristian/rpos-gateway/releases/download/0.2.0/rpos-gateway-0.2.0.zip
unzip rpos-gateway-0.2.0.zip -d rpos-gateway-0.2.0
cd rpos-gateway-0.2.0
```

Set the `StreamMediaUri` (RTSP tunnel URI), `IpAddress`, `ServicePort` and optionally other options in the `rposConfig.json` file.

Start rpos-gateway by running `node rpos-gateway.js`