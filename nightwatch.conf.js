module.exports = {
  "src_folders": ["tests"],
  "output_folder": "reports",
  "custom_commands_path": "",
  "custom_assertions_path": "",
  "page_objects_path": "page-objects",
  "globals_path": "",

  "selenium": {
    "start_process": false
  },

  "test_settings": {
    "default": {
      "launch_url": "http://dev.matthewroach.me/login/",
      "selenium_host": "localhost",
      "selenium_port": 9515,
      "default_path_prefix": "",
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },

    "ci": {
      "desiredCapabilities": {
        "browserName": "firefox"
      }
    }
  }
}
