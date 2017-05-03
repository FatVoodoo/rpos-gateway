///<reference path="./lib/extension.ts"/>

interface rposConfig {
	StreamMediaUri: string;
  NetworkAdapters: string[];
  IpAddress: string;
  ServicePort: number;
  RTSPPort: number;
  MulticastEnabled: boolean;
  DeviceInformation: DeviceInformation;
  CameraOptions: CameraOptions;
  CameraSettings: CameraSettings;
  logLevel: number;
  logSoapCalls: Boolean;
}

interface DeviceInformation {
  Manufacturer: string;
  Model: string;
  HardwareId: string;
  SerialNumber: string;
  FirmwareVersion: string;
}

interface TypeConstructor extends Function {
  name: string;
}

interface SoapServiceOptions {
  path: string,
  services: any,
  xml: any,
  wsdlPath: string,
  onReady: () => void;
}

interface Date {
  stdTimezoneOffset: () => number;
  dst: () => boolean;
}

interface UserControlOptions<T> {
  stringify?: (T) => string,
  range?: {
    min: T,
    max: T,
    allowZero?: boolean,
    step?: T
  }
  lookupSet?: UserControlsLookupSet<T>;
}

interface UserControlsLookup<T> {
  value: T;
  desc: string;
}
interface UserControlsLookupSet<T> extends Array<UserControlsLookup<T>> {

}

interface Resolution {
  Width: number;
  Height: number;
}
interface CameraSettings {
  gop: number; //keyframe every X sec.
  forceGop: boolean; // use iframe interval setting from v4l2ctl.json instead of Onvif
  resolution: Resolution;
  framerate: number;
  bitrate: number;
  profile: H264Profile;
  quality: number;
}

interface Range {
	Min: number;
	Max: number;
}
interface CameraOptions {
	resolutions: Resolution[];
	framerates: number[];
	bitrates: number[];
	govrange: Range;
	profiles: H264Profile[];
}
interface H264Profile {
	value: number;
	desc: string;
}