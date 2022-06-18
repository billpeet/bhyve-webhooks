# bhyve-webhooks

This app is designed to subscribe to the Orbit B-Hyve API and broadcast a webhook to an webhook on sprinkler start.

## Usage

```
cd ./app
cp .env-sample .env
// fill out all the config details
npm install
npm start
```

## Environment Configuration

| key                            | description                       |
| ---------------------------    | ----------------------            |
| ORBIT_EMAIL                    | Orbit B-Hyve user                 |
| ORBIT_PASSWORD                 | Orbit B-Hyve password             |
| STATION_STARTED_WEBHOOK_URL    | Webhook URL to post to            |
| STATION_STARTED_WEBHOOK_METHOD | Webhook method (e.g. POST or GET) |