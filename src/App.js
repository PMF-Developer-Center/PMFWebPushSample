import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MFPPush from "ibm-mfp-web-push";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>MFP Web Push Notifications</p>
        <button onClick={initWebPushSDK}>Initialize</button>
        <button onClick={register}>Register Device</button>
        <button onClick={unregister}>Un-register Device</button>
        <button onClick={subscribe}>Subscribe to tags</button>
        <button onClick={unsubscribe}>Unsubscribe from tags</button>
        <button onClick={currentSubscriptions}>
          Fetch current subscriptions
        </button>
        <button onClick={availableTags}>Fetch available subscriptions</button>
      </header>
    </div>
  );
}

function initWebPushSDK() {
  MFPPush.initialize({
    appId: "com.webpush",
    mfpContextRoot: "/mfp",
  });
}

function register() {
  MFPPush.registerDevice()
    .then((res) => {
      alert("Successfully Registered Device...");
    })
    .catch((err) => {
      console.log("Registration Failed" + err);
    });
}

function unregister() {
  MFPPush.unregisterDevice()
    .then((res) => {
      alert("Successfully Un-registered Device...");
    })
    .catch((err) => {
      console.log("Unregistration Failed" + err);
    });
}

function subscribe() {
  MFPPush.subscribe("offers")
    .then((res) => {
      alert("Subscribed successfully...");
    })
    .catch((err) => {
      console.log(JSON.stringify(err));
    });
}

function unsubscribe() {
  MFPPush.unsubscribe("offers")
    .then((res) => {
      alert("You are now unsubscribed from 'offers'. Sorry to see you go! :(");
    })
    .catch((err) => {
      console.log(JSON.stringify(err));
    });
}

function availableTags() {
  MFPPush.retrieveAvailableSubscriptions()
    .then((res) => {
      var result = "Available Tags are: \n\n";
      for (var i in res.tags) {
        result += "-> ";
        result += res.tags[i].name + "\n";
      }
      alert(result);
    })
    .catch((err) => {
      console.log(JSON.stringify(err));
    });
}

function currentSubscriptions() {
  MFPPush.retrieveActiveSubscriptions()
    .then((res) => {
      var result = "Current subscriptions: \n\n";
      for (var i in res.subscriptions) {
        result += "-> ";
        result += res.subscriptions[i].tagName + "\n";
      }
      alert(result);
    })
    .catch((err) => {
      console.log(JSON.stringify(err));
    });
}
export default App;
