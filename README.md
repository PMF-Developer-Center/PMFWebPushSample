# Sample React app for PMF-9.0-WebPush


## How to use this?

Download/Clone the repo:

1. `npm i`
2. `npm i PMF-9.0-WebPush`
3. Setup Proxy in the App. Go to **setupProxy.js** and update `target` field to your MobileFoundation Server URL.

On MobileFoundation console: 

1. Register App with Application ID `com.webpush` with Web Platform. (You can choose any display name of your choice but Application ID should be com.webpush)
2. Make sure you add **push.mobileclient, devices.read, devices.write, subscriptions.write** security checks under the Security Section.
3. Add appropriate config for web platforms - chrome, firefox, safari

## Boom! Ready to start the App.

`npm start`
