# rpos-gateway
Raspberry Pi Onvif Gateway

Node.js based Onvif Soap service. (http://www.onvif.org) 

Initial goal is to provide a Onvif Media service which is compatible with Synology Surveillance Station.
This allows the Pi to be used as a surveillance camera without the need for adding any custom camera files to your Synology NAS.
First demo video @ https://youtu.be/ZcZbF4XOH7E

This version uses a patched version of the "node-soap" v0.80 library (https://github.com/vpulim/node-soap/releases/tag/v0.8.0) located @ https://github.com/BreeeZe/node-soap

#Features:

- Streams H264 video over rtsp
- Camera control (resolution and framerate) through Onvif
- Set other camera options through a web interface.

#How to develop:

npm install
gulp default
gulp release

#Camera settings
You can set camera settings by browsing to : http://CameraIP:Port/
These settings are then saved in a file called v4l2ctl.json and are persisted on rpos restart.

#Known Issues
- 1920x1080 can cause hangs and crashes.

#ToDo's
- Add authentication
- Add MJPEG
- Implement more ONVIF calls
- and more...
