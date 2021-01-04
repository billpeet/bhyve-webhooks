"use strict";
const WebHooks = require("node-webhooks");

const webHooks = new WebHooks({
  db: {},
});

webHooks.add(
  "someHook",
  "https://maker.ifttt.com/trigger/sprinker_program_start/with/key/bI7mB24rHFM6yXvgp8GxR5"
);

module.exports = webHooks;
