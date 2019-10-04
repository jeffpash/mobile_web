cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-device.DeviceProxy",
      "file": "plugins/cordova-plugin-device/src/windows/DeviceProxy.js",
      "pluginId": "cordova-plugin-device",
      "runs": true
    },
    {
      "id": "cordova-plugin-battery-status.battery",
      "file": "plugins/cordova-plugin-battery-status/www/battery.js",
      "pluginId": "cordova-plugin-battery-status",
      "clobbers": [
        "navigator.battery"
      ]
    },
    {
      "id": "cordova-plugin-battery-status.Battery",
      "file": "plugins/cordova-plugin-battery-status/src/windows/BatteryProxy.js",
      "pluginId": "cordova-plugin-battery-status",
      "runs": true
    },
    {
      "id": "cordova-plugin-magnetometer.main",
      "file": "plugins/cordova-plugin-magnetometer/www/magnetometer.js",
      "pluginId": "cordova-plugin-magnetometer",
      "clobbers": [
        "cordova.plugins.magnetometer"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-battery-status": "2.0.3",
    "cordova-plugin-magnetometer": "1.0.0"
  };
});