"use strict";
// const WebHooks = require("node-webhooks");
const axios = require("axios");

class WebHooks {

  endpoints = {};

  add(name, url, method = "POST") {
    this.endpoints[name] = {
      url,
      method,
    };
  }

  async trigger(name, payload) {
    const endpoint = this.endpoints[name];
    if (!endpoint) {
      return;
    }
    if (endpoint.method === "GET") {
      return await this.get(endpoint.url, payload);
    } else {
      return await this.post(endpoint.url, payload);
    }
  }

  async post(url, payload) {
    return await axios.post(url, payload);
  }

  async get(url, payload) {
    const query = Object.keys(payload).map(k => `${k}=${payload[k]}`).join("&");
    url = url + (query && ("?" + query));
    return await axios.get(url);
  }
}

// const webHooks = new WebHooks({
//   db: {},
// });

// webHooks.add(
//   "someHook",
//   "https://maker.ifttt.com/trigger/sprinker_program_start/with/key/bI7mB24rHFM6yXvgp8GxR5"
// );

module.exports = WebHooks;
